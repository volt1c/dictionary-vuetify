import { FailureMessage, Word } from './responseTypes'
import { isFailureMessage, isWordArray } from './validation'

async function fetchDictionary(
  word = 'hello',
  lang = 'en'
): Promise<Word[] | FailureMessage> {
  let resp = {}

  try {
    resp = await (
      await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/${lang}/${word}`
      )
    ).json()
  } catch (err) {}

  if (isWordArray(resp) || isFailureMessage(resp)) {
    return resp
  }

  const connectionError: FailureMessage = {
    title: 'Connection Error',
    message: "Sorry pal, we couldn't connect to dictionary.",
    resolution:
      'You can try the search again at later time or head to the web instead.',
  }

  return connectionError
}

export { fetchDictionary }
