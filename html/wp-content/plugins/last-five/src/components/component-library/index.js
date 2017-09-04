import React from 'react';
import AdminHeader from 'components/wp/admin-header';
import Button from 'components/wp/button';
import Notice from 'components/wp/notice';
import ArticleList from '../../ArticleList';

require( './style.scss' );

export default class ComponentLibrary extends React.Component {
	constructor(props){
		super();
		this.state = {
			posts: []
		}
	}

	componentWillMount() {
		return fetch('/wp-json/wp/v2/posts')
			.then( res => res.json())
			.then( data => {
				this.setState({ posts: [...data] });
		})
			.catch( err => console.log("There was an error", err))
	}

	render() {
		return (
				<div className="wp-styleguide">
					<AdminHeader>
						Last 5 Posts
					</AdminHeader>

					<ArticleList posts={this.state.posts} />

					<Notice type="info">The is an informative notice</Notice>
					<Notice type="success">Your action was successful</Notice>
					<Notice type="error">An unexpected error has occurred</Notice>

					<div className="wp-styleguide--buttons">
						<h2>Buttons</h2>
						<p>
							<Button type="primary">Primary Button</Button>
						</p>
						<p>
							<Button type="secondary">Secondary Button</Button>
						</p>
					</div>

				</div>
		);
	}

};
