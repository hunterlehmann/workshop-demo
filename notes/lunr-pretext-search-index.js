var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "notes-week-01",
  "level": "1",
  "url": "notes-week-01.html",
  "type": "Section",
  "number": "",
  "title": "Week 1",
  "body": " Week 1  This week we covered the following topics:    Describe the graph of the curve , .    Find a vector-valued function for the curve of intersection of the cylinder and the plane .   Hint: How could you parameterize the circle in the plane?     What is the difference between the parameteric curves , and as runs over all real numbers?    With a parametric plot and a set of values, we can associate a ‘direction’. For example, the curve , is the unit circle traced counterclockwise. How can we change a set of given parametric equations and values to get the same curve, only traced backwards?    The motion of a particle in the -plane at time is described by the vector function        Find an equation in and whose graph is the path of the particle. Consider how is related to and what values takes on.    Find the particle’s velocity and acceleration vectors at     Sketch the path of the particle and include the particle’s velocity and acceleration vectors at        Find the parametric equations for the line that is tangent to the curve       Determine the point at which and intersect, and find the angle between the curves at that point. (Hint: You’ll need to set this up like the line intersection problems you’ve seen before, writing one in and one in ).  If these two functions were the trajectories of two bumblebees on the same scale of time, would the bees collide at their point of intersection? Explain.    Find the equation of the plane perpendicular to the curve when .    "
},
{
  "id": "notes-week-02",
  "level": "1",
  "url": "notes-week-02.html",
  "type": "Section",
  "number": "",
  "title": "Week 2",
  "body": " Week 2  This week we covered the following topics in the second week.  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
