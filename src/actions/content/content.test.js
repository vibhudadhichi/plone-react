import { addContent, deleteContent, editContent, getContent } from './content';
import {
  ADD_CONTENT,
  DELETE_CONTENT,
  EDIT_CONTENT,
  GET_CONTENT,
} from '../../constants/ActionTypes';

describe('Content action', () => {
  describe('addContent', () => {
    it('should create an action to add content', () => {
      const url = 'http://localhost';
      const content = 'Hello World!';
      const action = addContent(url, content);

      expect(action.type).toEqual(ADD_CONTENT);

      const apiMock = {
        post: jest.fn(),
      };
      action.promise(apiMock);

      expect(apiMock.post).toBeCalledWith(url, { data: content });
    });
  });

  describe('deleteContent', () => {
    it('should create an action to delete content', () => {
      const url = 'http://localhost';
      const action = deleteContent(url);

      expect(action.type).toEqual(DELETE_CONTENT);

      const apiMock = {
        del: jest.fn(),
      };
      action.promise(apiMock);

      expect(apiMock.del).toBeCalledWith(url);
    });
  });

  describe('editContent', () => {
    it('should create an action to edit content', () => {
      const url = 'http://localhost';
      const content = 'Hello World!';
      const action = editContent(url, content);

      expect(action.type).toEqual(EDIT_CONTENT);

      const apiMock = {
        patch: jest.fn(),
      };
      action.promise(apiMock);

      expect(apiMock.patch).toBeCalledWith(url, { data: content });
    });
  });

  describe('getContent', () => {
    it('should create an action to get content', () => {
      const url = 'http://localhost';
      const action = getContent(url);

      expect(action.type).toEqual(GET_CONTENT);

      const apiMock = {
        get: jest.fn(),
      };
      action.promise(apiMock);

      expect(apiMock.get).toBeCalledWith(url);
    });
  });
});
