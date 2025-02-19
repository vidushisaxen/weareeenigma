import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import projectType from './projectType'
import { projectCategory } from './projectCategoriesType'
import pagesType from './pagesType'
import contactType from './contactType'
import careersType from './careersType'
import { careersCategory } from'./careersCategoriesType'
export const schema = {
  types: [blockContentType, categoryType, postType, authorType,projectType, projectCategory,pagesType, contactType, careersType, careersCategory],
}
