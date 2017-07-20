import { connect } from 'react-redux'

const MyComponent = ({ name }) => (
	<div>{name}</div>
);

const mapStateToProps = state => ({
	name: state.name;
});

const ConnectedComponent = connect(mapStateToProps)(MyComponent);
