import React, { useEffect, useState } from 'react';
import { Modal } from './Modal';
import { FormInput } from './FormInput';
import { CodedButton } from './CodedButton';

export const EntityEditModal = ({
  show,
  title,
  entity,
  fields,
  onClose,
  onSave,
  generateId,
}) => {
  const defaultEntity = fields.reduce((acc, field) => {
    acc[field.name] = field.defaultValue ?? '';
    return acc;
  }, {});

  const [currentEntity, setCurrentEntity] = useState({ ...defaultEntity, ...entity });

  useEffect(() => {
    setCurrentEntity({ ...defaultEntity, ...entity });
  }, [entity, defaultEntity]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCurrentEntity((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    const normalized = fields.reduce((acc, field) => {
      const rawValue = currentEntity[field.name];
      acc[field.name] = field.type === 'number' ? parseFloat(rawValue) || 0 : rawValue;
      return acc;
    }, {
      ...currentEntity,
      id: currentEntity.id || (generateId ? generateId() : undefined),
    });

    onSave(normalized);
  };

  return (
    <Modal
      show={show}
      title={title}
      onClose={onClose}
      footer={
        <div className="flex justify-end gap-3">
          <CodedButton variant="secondary" onClick={onClose}>Annuler</CodedButton>
          <CodedButton variant="solid" onClick={handleSave}>Enregistrer</CodedButton>
        </div>
      }
      className="max-w-xl"
    >
      <div className="space-y-4">
        {fields.map((field) => (
          <FormInput
            key={field.name}
            label={field.label}
            name={field.name}
            type={field.type}
            step={field.step}
            min={field.min}
            placeholder={field.placeholder}
            value={currentEntity[field.name] ?? ''}
            onChange={handleChange}
            isCurrency={field.isCurrency}
          />
        ))}
      </div>
    </Modal>
  );
};
