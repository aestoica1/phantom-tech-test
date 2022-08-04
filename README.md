# Project Details

Name: PhantomExerciseAlexStoica <br/>
Date: 04/08/2022<br/>
Author: Alexandra Stoica<br/>
Repository Link: https://github.com/aestoica1/phantom-tech-test<br/>
Public Link: https://aestoica1.github.io/phantom-tech-test/

# Purpose

Web app where users can perform full CRUD on bookmarks and receive appropriate alerts when necessary (eg success, warning).

# Solution's Design - Components

1. Bookmarks List Component - displays a list of 20 paginated bookmarks per page.<br/>
   a) Bookmarks Details Component - displays details for the selected individual bookmark from the Bookmarks List Component. It also provides the option to edit and delete the selected bookmark.<br/>
   i) Edit Bookmark Component - shows an edit form to edit individual bookmarks.

2. Add Bookmark Component - a form that allows users to submit a new bookmark. This has been included in the Bookmarks List Component’s UI.

# Models Folder

The folder contains the bookmark model, which represents the primary data model used in the application.

# Services Folder

The folder contains the main bookmarks service which deals with data manipulation and storage.

# Limitations

1. A clean but basic design was created using Bootstrap.
2. Used an NPM package for pagination rather than the longer approach of creating it from scratch. However, a reliable npm package was used with 93k weekly downloads.

# Angular CLI Version

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.0.

## Local Development Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files of the project.

## Code Scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running Unit Tests

Not available at the moment, but could be run using `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running End-to-end Tests

Not available at the moment, but could be run using `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further Help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
