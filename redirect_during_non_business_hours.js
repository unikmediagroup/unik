const workingHours = {
  // 1 means monday  , 2 means tuesday and so on
  1: [{start: '0900', end: '1200'}, {start: '1400', end: '1900'}], // Monday
  2: [{start: '0900', end: '1200'}, {start: '1400', end: '1900'}], // Tuesday
  3: [{start: '0900', end: '1200'}, {start: '1400', end: '1900'}], // Wednesday
  4: [{start: '0900', end: '1200'}, {start: '1400', end: '1900'}], // Thursday
  5: [{start: '0900', end: '1200'}, {start: '1400', end: '1900'}], // Friday
};


function isBusinessHours(workingHours) {
  const currentDate = new Date();
  const estDate = new Date(currentDate.toLocaleString("en-US", {timeZone: "America/New_York"}));
  const currentDay = estDate.getDay(); // 0 is Sunday, 1 is Monday, ..., 6 is Saturday
  const currentHour = estDate.getHours();
  const currentMinutes = estDate.getMinutes();
  
  if (workingHours.hasOwnProperty(currentDay)) {
    // Iterate through the time ranges for the current day
    for (const range of workingHours[currentDay]) {
      const startHour = parseInt(range.start.substring(0, 2));
      const startMinutes = parseInt(range.start.substring(2));
      const endHour = parseInt(range.end.substring(0, 2));
      const endMinutes = parseInt(range.end.substring(2));
      
      // Create Date objects for the start and end of the range
      const start = new Date(estDate);
      start.setHours(startHour, startMinutes);
      
      const end = new Date(estDate);
      end.setHours(endHour, endMinutes);
      
      // Check if the current time is within the range
      if (estDate >= start && estDate <= end) {
        return true;
      }
    }
  }  
  // Return false if the current time is not within any working hours
  return false;
}


if(!isBusinessHours(workingHours)){
  window.location.href = "https://page_you_want_to_redirect_to_during_non_business_hours.com";
}
