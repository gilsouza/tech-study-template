# tech-study-template

This repository serves as a checklist for learning a tech or stack through a to-do list project.

## Concept

The aim of this project is to provide a fundamental framework, serving as a guide or checklist, intended for the implementation and study of a to-do list application project in various languages or stacks.

Based on this concept, interested individuals can fork the project to explore and study the application's implementation across different frameworks and platforms, including Ionic, React Native, Kotlin Multiplatform (KMP), Angular for web applications, Next.js, among others.

## Checklist Suggestion

- [ ] Layout implementation
- [ ] Animations
- [ ] Screen Navigation
- [ ] HTTP Client and fetch data
- [ ] Cache/Offline Data
- [ ] Dark and Light Theme
- [ ] State management
- [ ] Native Features like a Network status

## Figma

To help you focus on what matters, we provide a simple layout that can be followed or used as a base. But the focus is studying. Feel free to play and let your imagination run wild =)

[Example project in figma](https://www.figma.com/file/awNKPCHrjZLBh7bQhtJLAR/Mobile?type=design&node-id=0%3A1&mode=design&t=iHKtaTVvMeBzJONP-1)

## Mock Server

To facilitate the construction of the project, this repository provides a mock server that offers a simple REST API to handle the tasks of the to-do list app.

### Running the mock sever

```sh
  cd mock-server
  yarn install && yarn start
```

### Mock-server API

#### [GET] /tasks

#### [GET] /tasks/:id

#### [POST] /tasks

#### [DELETE] /tasks/:id

#### [PATCH] /tasks/:id

#### [PUT] /tasks/:id

#### [POST] /tasks/:id/done

#### [DELETE] /tasks/:id/done
