"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Enumeration of the different types of folders.
 */
var FolderType;
(function (FolderType) {
    // Standard picture folder.  May contain pictures, videos and
    // child picture folders.
    FolderType["Picture"] = "picture";
    // Search folder parent.  Used to create a heirarchy of search
    // folders.  e.g.:
    //
    //   Search Folders
    //      Ratings
    //          ... search folders here...
    //      Keywords
    //          ... search folders here...
    //
    // May contain search folders and other search parent folders.
    FolderType["SearchParent"] = "search_parent";
    // Search folder which executes a query to return folder contents.
    // e.g. "Rating = 5", "Keywords = Family", etc.  May not contain
    // pictures, videos or child folders.
    FolderType["Search"] = "search";
})(FolderType = exports.FolderType || (exports.FolderType = {}));
