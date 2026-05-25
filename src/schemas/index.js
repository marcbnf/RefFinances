import { z } from 'zod';

/**
 * Depense Schema — Represents a single expense line
 */
export const DepenseSchema = z.object({
  nom: z.string().min(1, 'Nom de dépense requis'),
  du: z.number().min(0, 'Montant dû doit être ≥ 0'),
  recu: z.number().min(0, 'Montant reçu doit être ≥ 0'),
});

/**
 * Motif Schema — Represents a "motif" (reason/category)
 */
export const MotifSchema = z.object({
  id: z.string().min(1, 'ID requis'),
  nom: z.string().min(1, 'Nom du motif requis'),
  indemnite: z.number().min(0, 'Indemnité doit être ≥ 0'),
  coeffKm: z.number().min(0, 'Coefficient km doit être ≥ 0'),
  plafondKm: z.number().min(0, 'Plafond km doit être ≥ 0'),
});

/**
 * Trajet Schema — Represents a "trajet" (route/journey)
 */
export const TrajetSchema = z.object({
  id: z.string().min(1, 'ID requis'),
  nom: z.string().min(1, 'Nom du trajet requis'),
  distance: z.number().min(0, 'Distance doit être ≥ 0'),
});

/**
 * Convocation Schema — Main data object
 */
export const ConvocationSchema = z.object({
  id: z.string().min(1, 'ID requis'),
  numero: z.string().min(1, 'Numéro de convocation requis'),
  date: z.string().refine(
    (d) => !isNaN(Date.parse(d)),
    'Date invalide'
  ),
  motifId: z.string().min(1, 'Motif requis'),
  expenseType: z.enum(['forfait', 'reel'], { message: 'Type de frais invalide (forfait/reel)' }),
  km: z.union([z.number().min(0), z.string()]),
  trajetId: z.string().optional(),
  depenses: z.array(DepenseSchema).optional(),
  
  // Détails frais réels
  detailsReel: z.object({
    locationVoiture: z.number().optional(),
    carburant: z.number().optional(),
    avion: z.number().optional(),
    train: z.number().optional(),
    repas: z.number().optional(),
    transportCommun: z.number().optional(),
    parking: z.number().optional(),
    peageSurcout: z.number().optional(),
  }).optional(),

  // Fichier associé
  fileName: z.string().optional(),
  filePath: z.string().optional(),
  fileUrl: z.string().url().optional(),
});

/**
 * Validate convocation data at runtime
 * Usage: const result = validateConvocation(data);
 */
export const validateConvocation = (data) => {
  try {
    const validated = ConvocationSchema.parse(data);
    return { success: true, data: validated };
  } catch (error) {
    return { success: false, errors: error.errors };
  }
};

export const validateMotif = (data) => {
  try {
    const validated = MotifSchema.parse(data);
    return { success: true, data: validated };
  } catch (error) {
    return { success: false, errors: error.errors };
  }
};

export const validateTrajet = (data) => {
  try {
    const validated = TrajetSchema.parse(data);
    return { success: true, data: validated };
  } catch (error) {
    return { success: false, errors: error.errors };
  }
};
