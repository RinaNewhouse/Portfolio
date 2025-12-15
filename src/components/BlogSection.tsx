import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { BlogPost, blogPosts } from '../data/blogPosts';

const BlogSection: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id: postId } = useParams();
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [postsToShow, setPostsToShow] = useState<number>(6); // Start with 6 posts

  // Scroll to section when route is /blog
  useEffect(() => {
    if (location.pathname === '/blog' && !postId) {
      setTimeout(() => {
        const element = document.getElementById('blog');
        if (element) {
          const headerHeight = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [location.pathname, postId]);

  // Handle URL-based modal opening
  useEffect(() => {
    if (postId) {
      const post = blogPosts.find(p => p.id === postId);
      if (post) {
        setSelectedPost(post);
      }
    } else {
      setSelectedPost(null);
    }
  }, [postId]);

  const handlePostClick = (post: BlogPost) => {
    setSelectedPost(post);
    navigate(`/blog/${post.id}`);
  };

  const handleCloseModal = () => {
    setSelectedPost(null);
    navigate('/');
  };

  // Get all unique tags
  const allTags = ['all', ...Array.from(new Set(blogPosts.flatMap(post => post.tags)))];

  // Filter posts by selected tag and sort chronologically (newest first)
  const filteredPosts = (selectedTag === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.tags.includes(selectedTag))
  ).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Get only the posts we want to show (first X posts)
  const displayedPosts = filteredPosts.slice(0, postsToShow);
  
  // Check if there are more posts to show
  const hasMorePosts = filteredPosts.length > postsToShow;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-pink-500">Thoughts</span> & <span className="text-pink-500">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Raw thoughts, coding insights, and random musings from my learning journey. 
            Sometimes it's about React, sometimes it's about balcony furniture.
          </p>
        </div>

        {/* Tag Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => {
                setSelectedTag(tag);
                setPostsToShow(6); // Reset to show 6 posts when changing tags
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                selectedTag === tag
                  ? 'bg-pink-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {tag === 'all' ? 'All Posts' : tag}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedPosts.map((post) => (
            <article
              key={post.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
              onClick={() => handlePostClick(post)}
            >
              <div className="mb-4">
                <div className="text-sm text-pink-500 font-medium mb-2">
                  {formatDate(post.date)}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-pink-500 transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-300 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="text-pink-500 text-sm font-medium group-hover:text-pink-600 transition-colors duration-200">
                Read more →
              </div>
            </article>
          ))}
        </div>

        {/* Show More Button */}
        {hasMorePosts && (
          <div className="text-center mt-12">
            <button
              onClick={() => setPostsToShow(postsToShow + 3)} // Show 3 more posts
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Show More Posts ({filteredPosts.length - postsToShow} remaining)
            </button>
          </div>
        )}

        {/* Modal for Full Post */}
        {selectedPost && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={handleCloseModal}
          >
            <div 
              className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="text-sm text-pink-500 font-medium mb-2">
                      {formatDate(selectedPost.date)}
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      {selectedPost.title}
                    </h2>
                  </div>
                  <button
                    onClick={handleCloseModal}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl"
                  >
                    ×
                  </button>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-300 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="max-w-none">
                  <div 
                    className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line [&_a]:text-pink-500 [&_a]:hover:text-pink-600 [&_a]:underline"
                    dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
