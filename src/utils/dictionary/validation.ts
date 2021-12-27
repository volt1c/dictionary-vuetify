import { FailureMessage, Word } from './responseTypes'

//todo improve
function isWordArray(v: any): v is Word[] {
  return !!(v as Word[])[0]?.word
}

function isFailureMessage(v: any): v is FailureMessage {
  return !!(v as FailureMessage).title
}

export { isWordArray, isFailureMessage }
