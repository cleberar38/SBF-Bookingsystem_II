import React from 'react';
import DatePicker from 'material-ui/DatePicker';

/**
 * The Date Picker defaults to a portrait dialog. The `mode` property can be set to `landscape`.
 * You can also disable the Dialog passing `true` to the `disabled` property.
 */

const Calendar = () => (
  <div className="center-container">
    <DatePicker maxDate = {new Date()} hintText="Datum/mm/dd" mode="landscape" />
  </div>
);

export default Calendar;
