// ==== Simulated padlet.json using localStorage ====
let padletDB = JSON.parse(localStorage.getItem('padletJSON')) || {
  posts: []
};

// ==== DOM Elements ====
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalOverlay = document.getElementById('modalOverlay');
const postForm = document.getElementById('postForm');
const postGrid = document.getElementById('postGrid');
const clearBtn = document.getElementById('clearBtn'); // Optional Clear All

// ==== Modal Open/Close Logic ====
openModalBtn.addEventListener('click', () => {
  modalOverlay.classList.add('active');
});

closeModalBtn.addEventListener('click', () => {
  modalOverlay.classList.remove('active');
});

modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.remove('active');
  }
});

// ==== Form Submission: Add to padletDB and localStorage ====
postForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.getElementById('titleInput').value.trim();
  const name = document.getElementById('nameInput').value.trim();
  const description = document.getElementById('descriptionInput').value.trim();

  if (title && name && description) {
    const newPost = {
      title,
      description,
      name,
      timestamp: new Date().toISOString()
    };

    // Add post to padletDB (simulating JSON database)
    padletDB.posts.unshift(newPost);
    localStorage.setItem('padletJSON', JSON.stringify(padletDB));

    // Add post to UI
    createPostCard(newPost.title, newPost.description, newPost.name);

    // Reset form and close modal
    postForm.reset();
    modalOverlay.classList.remove('active');
  }
});

// ==== Create and Render a Post Card ====
function createPostCard(title, description, name) {
  const card = document.createElement('div');
  card.className = 'post-card';
  card.innerHTML = `
    <div class="post-header">
      <h3>${escapeHTML(title)}</h3>
    </div>
    <p>${escapeHTML(description)}</p>
    <div class="author">— ${escapeHTML(name)}</div>
  `;

  postGrid.prepend(card);
}

// ==== Escape HTML to Prevent XSS Attacks ====
function escapeHTML(str) {
  return str.replace(/[&<>"']/g, (char) => {
    return {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[char];
  });
}

// ==== Load All Posts on Page Load ====
window.addEventListener('DOMContentLoaded', () => {
  padletDB.posts.forEach(post => {
    createPostCard(post.title, post.description, post.name);
  });
});

// ==== Optional: Clear All Posts ====
if (clearBtn) {
  clearBtn.addEventListener('click', () => {
    if (confirm("Clear all dreams from the padlet?")) {
      padletDB = { posts: [] };
      localStorage.setItem('padletJSON', JSON.stringify(padletDB));
      postGrid.innerHTML = '';
    }
  });
}
