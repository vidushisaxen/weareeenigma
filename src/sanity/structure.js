import { StructureBuilder } from 'sanity/desk'

export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      // Blog Section
      S.listItem()
        .title('Blog')
        .child(
          S.list()
            .title('Blog Content')
            .items([
              S.documentTypeListItem('post').title('Posts'),
              S.documentTypeListItem('category').title('Categories'),
              S.documentTypeListItem('author').title('Authors'),
            ])
        ),

      S.divider(),

      // Projects Section
      S.listItem()
        .title('Projects')
        .child(
          S.list()
            .title('Projects Content')
            .items([
              S.documentTypeListItem('project').title('All Projects'),
              S.documentTypeListItem('projectCategory').title('Project Categories'),
            ])
        ),

      S.divider(),
      S.listItem()
      .title('Careers')
      .child(
        S.list()
          .title('Careers Content')
          .items([
            S.documentTypeListItem('careers').title('All Careers'),
            S.documentTypeListItem('careersCategory').title('Careers Categories'),
          ])
      ),

    S.divider(),

      S.listItem()
      .title('Pages')
      .child(
        S.list()
          .title('Pages List')
          .items([
            S.documentTypeListItem('homepage').title('Home Page'),
            S.documentTypeListItem('contact').title('Contact Page'),
            // S.documentTypeListItem('career').title('Career Page'),

          ])
      ),
      S.divider(),

      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !['post', 'category', 'author', 'project', 'projectCategory' , 'pages', 'contact','careers','careersCategory'].includes(item.getId())
      ),
    ])
    
    
