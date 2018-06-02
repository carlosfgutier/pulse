import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { Menu, Icon, Header } from 'semantic-ui-react';

import LoginModal from './LoginModal.jsx';

class NavBar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loginModalOpen: false,
			navBarOpen: false
		}
		this.toggleLoginModal = this.toggleLoginModal.bind(this);
		this.toggleNavbar = this.toggleNavbar.bind(this);
	}

	toggleLoginModal() {
		this.setState({
			loginModalOpen: !this.state.loginModalOpen
		})
	}

	toggleNavbar() {
		this.setState({
			navBarOpen: !this.state.navBarOpen
		})
	}

	render() {
		return (
			<Menu
				size='huge'
				fixed='top'
				style={{ minHeight: '40px' }}
			>
				<Link to='/'>
					<Menu.Item link={true}>
						<Header>
							The Pulse of Austin
						</Header>
					</Menu.Item>
				</Link>
				{this.state.loginModalOpen 
					? <Menu.Menu position='right'>
							<Menu.Item
								position='right'
								link={true}
								onClick={this.toggleLoginModal}
							>
							Login
							</Menu.Item>
						<Link to='/profile'>
							<Menu.Item
								position='right'
								link={true}
							>
							Profile
							</Menu.Item>
						</Link>
						<Link to='/favorites'>
							<Menu.Item
								position='right'
								link={true}
							>
							Favorites
							</Menu.Item>
						</Link>
				</Menu.Menu>
				: <Menu.Menu position='right'>
					<Icon 
						name='bars' 
						size='huge'
						style={{cursor: 'pointer'}}
						onClick={this.toggleNavbar}
					/>
				</Menu.Menu>
				}
				{this.state.loginModalOpen && <LoginModal
					loginModalOpen={this.state.loginModalOpen}
					toggleLoginModal={this.toggleLoginModal} />}
			</Menu>
		)
	}
}

const mapStateToProps = (state) => (
	{
		loggedIn: state.loggedIn
	}
)

const mapDispatchToProps = (dispatch) => (
	bindActionCreators({  }, dispatch)
)


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);