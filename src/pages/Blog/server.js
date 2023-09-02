const express = require('express');
const fs = require('fs');
const app = express();
const port = 3003; // Choose any available port

app.use(express.json());

app.get('/blogs', (req, res) => {
  // Read the db.json file and send the data as the response
  fs.readFile('db.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Failed to read data from db.json' });
    } else {
      const blogs = JSON.parse(data);
      res.json(blogs);
    }
  });
});

app.post('/blogs', (req, res) => {
  // Read the db.json file, add the new blog to the data, and write the updated data back to the file
  fs.readFile('db.json', 'utf8', (err, data) => { 
    if (err) {
      res.status(500).json({ error: 'Failed to read data from db.json' });
    } else {
      const blogs = JSON.parse(data);
      const newBlog = req.body;
      blogs.push(newBlog);
      fs.writeFile('db.json', JSON.stringify(blogs), 'utf8', (err) => {
        if (err) {
          res.status(500).json({ error: 'Failed to save data to db.json' });
        } else {
          res.json({ message: 'Blog saved successfully!' });
        }
      });
    }
  });
});

app.delete('/blogs/:id', (req, res) => {
  const postId = req.params.id;
  console.log(postId);

  fs.readFile('db.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Failed to read data from db.json' });
    } else {
      const blogs = JSON.parse(data);

      // Find the index of the blog with the provided ID
      const blogIndex = blogs.findIndex(blog => blog.id === postId);
console.log(blogIndex)
      if (blogIndex === -1) {
        res.status(404).json({ error: 'Blog not found' });
      } else {
        // Remove the blog at the found index
        blogs.splice(blogIndex, 1);

        // Write the updated data back to the file
        fs.writeFile('db.json', JSON.stringify(blogs), 'utf8', (err) => {
          if (err) {
            res.status(500).json({ error: 'Failed to save data to db.json' });
          } else {
            res.json({ message: 'Blog deleted successfully!' });
          }
        });
      }
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
