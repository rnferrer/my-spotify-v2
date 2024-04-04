type timeObject = {
  time: string
}

export default function getTime():timeObject {
  const date = new Date(),
        locale = 'en',
        time = date.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' });
  return {time}
}
