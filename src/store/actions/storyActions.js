import axios from 'axios';

export const GETTING_STORIES = 'GETTING_STORIES';
export const GETTING_STORIES_SUCCESSFUL = 'GETTING_STORIES_SUCCESSFUL';
export const GETTING_STORIES_FAILURE = 'GETTING_STORIES_FAILURE';

export const ADDING_STORY = 'ADDING_STORY';
export const ADDING_STORY_SUCCESSFUL = 'ADDING_STORY_SUCCESSFUL';
export const ADDING_STORY_FAILURE = 'ADDING_STORY_FAILURE';

export const EDITING_STORY = 'EDITING_STORY';
export const EDITING_STORY_SUCCESSFUL = 'EDITING_STORY_SUCCESSFUL';
export const EDITING_STORY_FAILURE = 'EDITING_STORY_FAILURE';

export const DELETING_STORY = 'DELETING_STORY';
export const DELETING_STORY_SUCCESSFUL = 'DELETING_STORY_SUCCESSFUL';
export const DELETING_STORY_FAILURE = 'DELETING_STORY_FAILURE';

export const getStories = () => dispatch => {
	dispatch({ type: GETTING_STORIES });

	axios
		.get('/stories')
		.then(res =>
			dispatch({ type: GETTING_STORIES_SUCCESSFUL, payload: res.data }),
		)
		.catch(err =>
			dispatch({ type: GETTING_STORIES_FAILURE, payload: err.data }),
		);
};

export const addStory = newProd => dispatch => {
	dispatch({ type: ADDING_STORY });
	axios
		.post('/stories/add', newProd)
		.then(res => dispatch({ type: ADDING_STORY_SUCCESSFUL, payload: res.data }))
		.catch(err => dispatch({ type: ADDING_STORY_FAILURE, payload: err.data }));
};

export const editStory = (uuid, story) => dispatch => {
	console.log(story);
	dispatch({ type: EDITING_STORY });
	axios
		.put(`/stories/edit/${uuid}`, story)
		.then(res =>
			dispatch({ type: EDITING_STORY_SUCCESSFUL, payload: res.data }),
		)
		.catch(err => dispatch({ type: EDITING_STORY_FAILURE, payload: err.data }));
};

export const deleteStory = uuid => dispatch => {
	dispatch({ type: DELETING_STORY });
	axios
		.delete(`/stories/delete/${uuid}`)
		.then(res =>
			dispatch({ type: DELETING_STORY_SUCCESSFUL, payload: res.data }),
		)
		.catch(err =>
			dispatch({ type: DELETING_STORY_FAILURE, payload: err.data }),
		);
};
