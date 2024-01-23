import { editTask } from '@/utils/actions';
import React from 'react';

const EditForm = ({ task }) => {
  const { id, completed, content } = task;
  return (
    <form
      className="max-w-sm p-12 border border-base-300 rounded-lg"
      action={editTask}
    >
      <input type="hidden" name="id" value={id} />
      <input
        type="text"
        required
        defaultValue={content}
        name="content"
        className="input input-bordered w-full"
      />
      <div className="form-control my-4">
        <label htmlFor="completed" className="label cursor-pointer">
          <span className="label-text">completed</span>
          <input
            className="checbox checkbox-primary checkbox-sm"
            type="checkbox"
            defaultChecked={completed}
            id="completed"
            name="completed"
          />
        </label>
      </div>
      <button type="submit" className="btn btn-primary btn-block btn-sm">
        Edit
      </button>
    </form>
  );
};

export default EditForm;
