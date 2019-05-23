import {
	GETTING_STORIES,
	GETTING_STORIES_SUCCESSFUL,
	GETTING_STORIES_FAILURE,
	ADDING_STORY,
	ADDING_STORY_SUCCESSFUL,
	ADDING_STORY_FAILURE,
	DELETING_STORY,
	DELETING_STORY_SUCCESSFUL,
	DELETING_STORY_FAILURE,
	EDITING_STORY,
	EDITING_STORY_SUCCESSFUL,
	EDITING_STORY_FAILURE,
} from '../actions/storyActions';

const initialState = {
	stories: [],
	fetching: false,
	adding: false,
	editing: false,
	deleting: false,
	success: false,
	failure: false,
	error: null,
};

const storyReducer = (state = initialState, action) => {
	switch (action.type) {
		case GETTING_STORIES:
			return {
				...state,
				fetching: true,
				error: null,
			};
		case GETTING_STORIES_SUCCESSFUL:
			return {
				...state,
				stories: action.payload,
				fetching: false,
				success: true,
				error: null,
			};

		case GETTING_STORIES_FAILURE:
			return {
				...state,
				fetching: false,
				success: false,
				failure: true,
				error: action.payload,
			};
		case ADDING_STORY:
			return {
				...state,
				adding: true,
				failure: false,
				error: null,
			};
		case ADDING_STORY_SUCCESSFUL:
			return {
				...state,
				stories: action.payload,
				fetching: false,
				adding: false,
				success: true,
				failure: false,
				error: null,
			};
		case ADDING_STORY_FAILURE:
			return {
				...state,
				fetching: false,
				success: false,
				failure: true,
				error: action.payload,
			};

		case EDITING_STORY:
			return {
				...state,
				fetching: false,
				adding: false,
				editing: true,
				deleting: false,
				success: false,
				failure: false,
				error: null,
			};
		case EDITING_STORY_SUCCESSFUL:
			return {
				...state,
				stories: action.payload,
				fetching: false,
				adding: false,
				editing: false,
				deleting: false,
				success: true,
				failure: false,
				error: null,
			};
		case EDITING_STORY_FAILURE:
			return {
				...state,
				fetching: false,
				adding: false,
				editing: false,
				deleting: false,
				success: false,
				failure: true,
				error: action.payload,
			};

		case DELETING_STORY:
			return {
				...state,
				fetching: false,
				adding: false,
				editing: false,
				deleting: true,
				success: false,
				failure: false,
				error: null,
			};
		case DELETING_STORY_SUCCESSFUL:
			return {
				...state,
				stories: action.payload,
				fetching: false,
				adding: false,
				editing: false,
				deleting: false,
				success: true,
				failure: false,
				error: null,
			};
		case DELETING_STORY_FAILURE:
			return {
				...state,
				fetching: false,
				adding: false,
				editing: false,
				deleting: false,
				success: false,
				failure: true,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default storyReducer;
