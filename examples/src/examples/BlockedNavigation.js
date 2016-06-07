import React from 'react';
import DayPicker from '../../../src/DayPicker';

import '../../../src/style.css';;

export default function BlockedNavigation() {
  return <DayPicker canChangeMonth={false} />;
}
