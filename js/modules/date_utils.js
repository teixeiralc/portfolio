export default function initDateUtils() {
  calculateAge();
  calculateExperienceDuration();
}

function calculateAge() {
  const birthDate = new Date('2004-12-28');
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  const aboutInfo = document.querySelector('.about_info p:first-child');
  if (aboutInfo) {
    aboutInfo.innerHTML = aboutInfo.innerHTML.replace(/tenho \d+ anos/, `tenho ${age} anos`);
    aboutInfo.innerHTML = aboutInfo.innerHTML.replace(/I am \d+ years old/, `I am ${age} years old`);
    aboutInfo.innerHTML = aboutInfo.innerHTML.replace(/\d+ years old/, `${age} years old`);
  }
}

function calculateExperienceDuration() {
  const metaItems = document.querySelectorAll('.experience_meta .meta_item span');

  metaItems.forEach(item => {
    const text = item.textContent;
    if (text.includes('Presente') || text.includes('Present')) {
      const parts = text.split(' - ');
      if (parts.length >= 2) {
        const startDateStr = parts[0].trim();

        const startDate = parseDate(startDateStr);
        if (startDate) {
          const endDate = new Date();
          const totalMonths = diffInMonths(startDate, endDate);

          const isPt = text.includes('Presente');
          const monthsLabel = isPt ? 'meses' : 'mos';
          const yearsLabel = isPt ? 'anos' : 'yrs';
          const yearLabel = isPt ? 'ano' : 'yr';
          const monthLabel = isPt ? 'mês' : 'mo';

          let durationStr = '';

          if (totalMonths < 12) {
            durationStr = `${totalMonths} ${totalMonths === 1 ? monthLabel : monthsLabel}`;
          } else {
            const years = Math.floor(totalMonths / 12);
            const months = totalMonths % 12;
            const yStr = `${years} ${years === 1 ? yearLabel : yearsLabel}`;
            const mStr = months > 0 ? ` ${months} ${months === 1 ? monthLabel : monthsLabel}` : '';
            durationStr = `${yStr}${mStr}`;
          }

          const dotSplit = text.split('·');
          if (dotSplit.length > 0) {
            item.textContent = `${dotSplit[0].trim()} · ${durationStr}`;
          }
        }
      }
    }
  });
}

function parseDate(dateStr) {
  const ptMonths = {
    'Jan': 'Jan', 'Fev': 'Feb', 'Mar': 'Mar', 'Abr': 'Apr', 'Mai': 'May', 'Jun': 'Jun',
    'Jul': 'Jul', 'Ago': 'Aug', 'Set': 'Sep', 'Out': 'Oct', 'Nov': 'Nov', 'Dez': 'Dec'
  };

  let [month, year] = dateStr.split(' ');
  if (ptMonths[month]) {
    month = ptMonths[month];
  }

  return new Date(`${month} 1, ${year}`);
}

function diffInMonths(d1, d2) {
  let months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();

  return months + 1;
}
