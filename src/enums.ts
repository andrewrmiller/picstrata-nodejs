/**
 * Enumeration of the types of objects that make up a Picstrata library.
 */
export enum ObjectType {
  Library = 'library',
  Folder = 'folder',
  File = 'file',
  Album = 'album'
}

/**
 * Enumeration of the user roles supported by Picstrata.
 */
export enum Role {
  Owner = 'owner',
  Contributor = 'contributor',
  Reader = 'reader'
}

export enum ThumbnailSize {
  Small = 'sm',
  Medium = 'md',
  Large = 'lg'
}
