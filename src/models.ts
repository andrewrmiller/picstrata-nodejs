import { ObjectType, Role } from './enums';

/**
 * @interface IStatistics
 *
 * Statistics object for service as a whole.
 */
export interface IStatistics {
  libraryCount: number;
  folderCount: number;
  fileCount: number;
  albumCount: number;
  objectUserCount: number;
  queueLength: number;
}

/**
 * @interface IObjectUserAdd
 *
 * Information passed to the API to add a new user to the
 * membership of a library object.
 *
 * @prop userId - Unique ID of the user to add.
 * @prop role - Role the user should have in the folder.
 */
export interface IObjectUserAdd {
  userId: string;
  role: Role;
}

/**
 * @interface IObjectUserUpdate
 *
 * @prop role - Role the user should have in the object.
 */
export interface IObjectUserUpdate {
  role: Role;
}

/**
 * @interface IObjectUser
 *
 * Interface which represents the role assigned to a user for
 * a given object in the library.
 *
 * @prop libraryId - Unique ID of the parent library.
 * @prop objectType - The type of object.
 * @prop folderId - Unique ID of the object.
 * @prop userId - Unique ID of the user.
 * @prop role - Role the user has for the object.
 */
export interface IObjectUser {
  libraryId: string;
  objectType: ObjectType;
  objectId: string;
  userId: string;
  role: Role;
}

/**
 * @interface ILibrary
 *
 * Representation of a library.
 *
 * @prop libraryId - Unique ID of the library.
 * @prop name - Name of the library.
 * @prop timeZone - Default time zone for files uploaded to the library.
 * @prop description - Description of the library.
 * @prop userRole - Requesting user's role on the library.
 */
export interface ILibrary {
  libraryId: string;
  name: string;
  timeZone: string;
  description?: string;
  userRole?: Role;
}

/**
 * @interface ILibraryAdd
 *
 * Information passed to the API to create a new folder.
 *
 * @prop libraryId - Unique ID of the library as GUID (optional).
 * @prop name - Name of the library to create.
 * @prop timeZone - Default time zone for files uploaded to the library.
 * @prop description - Description of the library.
 */
export interface ILibraryAdd {
  libraryId?: string;
  name: string;
  timeZone: string;
  description?: string;
}

/**
 * @interface ILibraryUpdate
 *
 * Information passed to the API to update an existing library.
 *
 * @prop name - New name of the library.
 * @prop timeZone - New default time zone for files uploaded to the library.
 * @prop description - Updated description for the library.
 */
export interface ILibraryUpdate {
  name?: string;
  timeZone?: string;
  description?: string;
}

/**
 * @interface IFolder
 *
 * Representation of a folder.
 *
 * @prop libraryId - Unique ID of the containing library.
 * @prop folderId - Unique ID of the folder.
 * @prop name - The name of the folder (e.g. 'Summer BBQ').
 * @prop parentId - Unique ID of the parent folder or null for root folders.
 * @prop path - Path to the folder in the file system.  Relative to file system root.
 * @prop fileCount - Number of pictures in the folder (excludes thumbnails).
 * @prop fileSize - Total size for the pictures in the folder (excludes thumbnails).
 * @prop fileSizeSm - Total size of small thumbnails.
 * @prop fileSizeMd - Total size of medium thumbnails.
 * @prop fileSizeLg - Total size of large thumbnails.
 * @prop fileSizeCnv - Total size of converted files.
 * @prop userRole - Requesting user's role on the folder.
 */
export interface IFolder {
  libraryId: string;
  folderId: string;
  name: string;
  parentId: string | null;
  path: string;
  fileCount: number;
  fileSize: number;
  fileSizeSm: number;
  fileSizeMd: number;
  fileSizeLg: number;
  fileSizeCnv: number;
  userRole?: Role;
}

/**
 * @interface IBreadcrumb
 *
 * Representation of a breadcrumb in a folder's parent heirarchy.
 *
 * @prop libraryId - Unique ID of the containing library.
 * @prop folderId - Unique ID of the folder.
 * @prop name - The name of the folder (e.g. 'Summer BBQ').
 */
export interface IBreadcrumb {
  libraryId: string;
  folderId: string;
  name: string;
}

/**
 * @interface IFolderAdd
 *
 * Information passed to the API to create a new folder.
 *
 * @prop parentId - Unique ID of parent folder or null to create a new top level folder.
 * @prop name - Name of the folder (e.g. 'Summer BBQ').  Must be unique within the parent.
 */
export interface IFolderAdd {
  // Set parentId to null to create a top level folder.
  parentId: string | null;
  name: string;
}

/**
 * @interface IFolderUpdate
 *
 * Information passed to the API to update an existing folder.
 *
 * @prop name - The new name of the folder.  Must be unique within the parent.
 */
export interface IFolderUpdate {
  name?: string;
}

/**
 * @interface IFile
 *
 * Representation of a file.
 *
 * @prop libraryId - Unique ID of the parent library.
 * @prop folderId - Unique ID of the parent folder.
 * @prop fileId - Unique ID of the file.
 * @prop name - Name of the file.
 * @prop mimeType - Type of file.
 * @prop isVideo - True if this is a video.
 * @prop height - Height of the picture in pixels.
 * @prop width - Width of the picture in pixels
 * @prop importedOn - Date that the file was imported.
 * @prop takenOn - Date when the picture was taken.
 * @prop modifiedOn - Date when the file was last modified.
 * @prop rating - Rating of the picture.
 * @prop title - Title of the picture.
 * @prop comments - Comments about the picture.
 * @prop cameraMake - Make of the camera used to take the picture.
 * @prop cameraModel - Model of the camera used to take the picture.
 * @prop latitutde - GPS latitude in decimal degrees.  String for precision.
 * @prop longitude - GPS longitude in decimal degrees.  String for precision.
 * @prop altitude - GPS altitude in meters above/below sea level.  String for precision.
 * @prop fileSize - Size of the picture in bytes.
 * @prop fileSizeSm - Size of the small thumbnail in bytes.
 * @prop fileSizeMd - Szie of the medium thumbnail in bytes.
 * @prop fileSizeLg - Size of the large thumbnail in bytes.
 * @prop fileZieCnv - Size of the converted file in bytes.
 * @prop fileSizeBackup - Szie of the backup picture in bytes.
 * @prop isProcessing - True if we are currently processing this picture.
 */
export interface IFile {
  libraryId: string;
  folderId: string;
  fileId: string;
  name: string;
  mimeType: string;
  isVideo: boolean;
  height: number;
  width: number;
  importedOn: string;
  takenOn?: string;
  modifiedOn?: string;
  rating?: number;
  title?: string;
  comments?: string;
  cameraMake?: string;
  cameraModel?: string;
  latitude?: string;
  longitude?: string;
  altitude?: string;
  fileSize: number;
  fileSizeSm?: number;
  fileSizeMd?: number;
  fileSizeLg?: number;
  fileSizeCnv?: number;
  fileSizeBackup?: number;
  isProcessing: number;
  tags: string[];
}

export interface IFileAdd {
  name: string;
  mimeType: string;
  isVideo: boolean;
  height: number;
  width: number;
  fileSize: number;
  isProcessing: boolean;
}

export interface IFileUpdate {
  takenOn?: string;
  name?: string;
  rating?: number;
  title?: string;
  comments?: string;
  cameraMake?: string;
  cameraModel?: string;
  latitude?: string;
  longitude?: string;
  altitude?: string;
  tags?: string[];
}

/**
 * Enumeration of the file attributes which may be used in a query.
 */
export enum FileAttribute {
  ParentFolderId = 'parentFolderId',
  ParentFolderName = 'parentFolderName',
  Filename = 'filename',
  Rating = 'rating',
  IsVideo = 'isVideo',
  ImportedOn = 'importedOn',
  TakenOn = 'takenOn',
  ModifiedOn = 'modifiedOn',
  Tags = 'tags'
}

/**
 * Enumeration of the operators that can be used in a query criterion.
 */
export enum Operator {
  Equals = 'eq',
  NotEquals = 'neq',
  OneOf = 'oneOf',
  NotOneOf = 'notOneOf',
  LessThan = 'lt',
  LessThanOrEquals = 'lte',
  GreaterThan = 'gt',
  GreaterThanOrEquals = 'gte',
  Contains = 'contains'
}

/**
 * Model for an individual file criterion.
 */
export interface IFileCriterion {
  attribute: FileAttribute;
  operator: Operator;
  value: string | string[] | number | boolean;
}

export enum SortDirection {
  Ascending = 'asc',
  Descending = 'desc'
}

/**
 * Model for an individual order by clause.
 */
export interface IFileOrderBy {
  attribute: FileAttribute;
  direction: SortDirection;
}

/**
 * Model for a persisted file query.  A file query can be the source
 * of files for an album.
 */
export interface IFileQuery {
  version: string;
  criteria?: IFileCriterion[];
  orderBy?: IFileOrderBy[];
}

/**
 * Model that represents the target of a file copy operation.
 */
 export interface IFileCopyTarget {
  targetFolderId: string
}

/**
 * A container of files where the files are either selected individually
 * or provided via a file query.
 */
export interface IAlbum {
  libraryId: string;
  albumId: string;
  name: string;
  query?: IFileQuery;
}

export interface IAlbumAdd {
  name: string;
  query?: IFileQuery;
}

export interface IAlbumUpdate {
  name?: string;
  query?: IFileQuery;
}

export enum ExportJobStatus {
  Queued = 'queued',
  Processing = 'processing',
  Failed = 'failed',
  Success = 'success'
}

export interface IExportJob {
  jobId: string;
  libraryId: string;
  status: ExportJobStatus;
  error?: string;
  createdBy: string;
  updatedBy: string;
  updatedOn: string;
}

export interface IExportJobAdd {
  fileIds: string[];
}
