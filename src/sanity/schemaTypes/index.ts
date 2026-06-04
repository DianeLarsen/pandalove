import {type SchemaTypeDefinition} from 'sanity'
import {projectType} from './project'
import {postType} from './post'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [projectType, postType],
}