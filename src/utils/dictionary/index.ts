import {
  definition,
  meaning,
  phonetic,
  Word,
  FailureMessage,
} from './responseTypes'
import { isFailureMessage, isWordArray } from './validation'
import { fetchDictionary } from './fetch'

export type { definition, meaning, phonetic, Word, FailureMessage }
export { fetchDictionary, isWordArray, isFailureMessage }
