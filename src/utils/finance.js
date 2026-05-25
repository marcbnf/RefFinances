export const formatCurrency = (amount) => new Intl.NumberFormat('fr-FR', {
  style: 'currency',
  currency: 'EUR',
}).format(amount || 0);

export const getTotalDepense = (convocation, key = 'du') =>
  convocation.depenses.reduce((acc, dep) => acc + (parseFloat(dep[key]) || 0), 0);

export const getConvocationStatus = (convocation) => {
  const totalDu = getTotalDepense(convocation, 'du');
  const totalRecu = getTotalDepense(convocation, 'recu');
  const roundedDu = Math.round(totalDu * 100) / 100;
  const roundedRecu = Math.round(totalRecu * 100) / 100;

  if (roundedDu > 0 && roundedRecu >= roundedDu) {
    return {
      text: 'Payé',
      color: 'text-green-600 dark:text-green-400',
      icon: 'check',
      bgColor: 'bg-green-100 dark:bg-green-900/50',
    };
  }

  if (roundedRecu > 0 && roundedRecu < roundedDu) {
    return {
      text: 'Partiel',
      color: 'text-yellow-600 dark:text-yellow-400',
      icon: 'minus',
      bgColor: 'bg-yellow-100 dark:bg-yellow-900/50',
    };
  }

  return {
    text: 'En attente',
    color: 'text-zinc-500',
    icon: 'clock',
    bgColor: 'bg-zinc-100 dark:bg-zinc-700',
  };
};
