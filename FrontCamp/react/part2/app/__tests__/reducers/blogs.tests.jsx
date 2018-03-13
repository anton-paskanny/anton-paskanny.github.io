import blogsReducer from '../../client/reducers/blogs';
import { ADD_BLOG, DELETE_BLOG, FETCH_BLOGS } from '../../client/actions/blogs';


describe('Blogs reducer', () => {
  test('should return initial state', () => {
    const result = blogsReducer([], {});
    expect(result).toEqual([]);
  })

  test('should add new blog', () => {
    const newBlog = {
        _id: 1,
        author: 'test',
        text: 'test'
    };

    const result = blogsReducer([], {
      type: ADD_BLOG,
      blog: newBlog
    });

    expect(result).toEqual([
      {
          _id: 1,
          author: 'test',
          text: 'test'
      }
    ]);
  });

  test('should delete blog by id', () => {
    const state = [{
      _id: 1,
      author: 'test',
      text: 'test'
    }];

    const result = blogsReducer(state, {
      type: DELETE_BLOG,
      _id: 1
    });

    expect(result).toEqual([]);
  })
});
