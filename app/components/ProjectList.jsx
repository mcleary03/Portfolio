import React, { Component } from 'react'
import Card from './Card'

export default ({ projects }) => (
  <div className="container">
    <h1 className="text-center">Recent Projects</h1>
    {projects.map( project =>
      <Card key={project.name} project={project}/>
    )}
  </div>
)
