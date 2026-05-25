import { doc, collection, setDoc, updateDoc, deleteDoc, writeBatch, serverTimestamp } from 'firebase/firestore';
import { ref as storageRef, deleteObject } from 'firebase/storage';
import { db, storage } from '../firebase';
import logger from '../utils/logger';

const appDataDocRef = doc(db, 'appdata', 'main');
export const convocationsQuery = collection(appDataDocRef, 'convocations');
export const motifsQuery = collection(appDataDocRef, 'motifs');
export const trajetsQuery = collection(appDataDocRef, 'trajets');

const updateModificationTimestamp = async () => {
  await setDoc(appDataDocRef, { lastModification: serverTimestamp() }, { merge: true });
};

export const addConvocation = async (convocation) => {
  await setDoc(doc(convocationsQuery, convocation.id), convocation);
  await updateModificationTimestamp();
};

export const updateConvocation = async (convocation) => {
  await updateDoc(doc(convocationsQuery, convocation.id), convocation);
  await updateModificationTimestamp();
};

export const deleteConvocation = async (convocation) => {
  if (convocation.filePath) {
    try {
      await deleteObject(storageRef(storage, convocation.filePath));
    } catch (error) {
      logger.warn('Impossible de supprimer le fichier associé:', error);
    }
  }

  await deleteDoc(doc(convocationsQuery, convocation.id));
  await updateModificationTimestamp();
};

export const deleteConvocationFile = async (convocation) => {
  if (!convocation?.filePath) return;
  await deleteObject(storageRef(storage, convocation.filePath));
  await updateDoc(doc(convocationsQuery, convocation.id), {
    fileName: null,
    filePath: null,
    fileUrl: null,
  });
  await updateModificationTimestamp();
};

export const deleteSelectedConvocations = async (selectedIds, convocations) => {
  const filePaths = convocations
    .filter((convocation) => selectedIds.includes(convocation.id) && convocation.filePath)
    .map((convocation) => convocation.filePath);

  if (filePaths.length > 0) {
    await Promise.allSettled(
      filePaths.map((path) => deleteObject(storageRef(storage, path)).catch((error) => {
        logger.warn('Suppression de fichier échouée:', path, error);
      }))
    );
  }

  const batch = writeBatch(db);
  selectedIds.forEach((id) => batch.delete(doc(convocationsQuery, id)));
  await batch.commit();
  await updateModificationTimestamp();
};

export const saveMotif = async (motif) => {
  await setDoc(doc(motifsQuery, motif.id), motif, { merge: true });
  await updateModificationTimestamp();
};

export const deleteMotif = async (motifId) => {
  await deleteDoc(doc(motifsQuery, motifId));
  await updateModificationTimestamp();
};

export const saveTrajet = async (trajet) => {
  await setDoc(doc(trajetsQuery, trajet.id), trajet, { merge: true });
  await updateModificationTimestamp();
};

export const deleteTrajet = async (trajetId) => {
  await deleteDoc(doc(trajetsQuery, trajetId));
  await updateModificationTimestamp();
};
