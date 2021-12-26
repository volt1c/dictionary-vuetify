type definition = {
  definition: string
  example: string
  synonyms: Array<string>
  antonyms: Array<string>
}

type meaning = {
  partOfSpeech: string
  definitions: Array<definition>
}

type phonetic = {
  text: string
  audio?: string
}

type Word = {
  word: string
  phonetic: string
  phonetics: Array<phonetic>
  origin: string
  meanings: Array<meaning>
}

type FailureMessage = {
  title: string
  message: string
  resolution: string
}

export type { definition, meaning, phonetic, Word, FailureMessage }
