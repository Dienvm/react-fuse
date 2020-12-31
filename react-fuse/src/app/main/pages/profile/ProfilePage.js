import FuseAnimate from '@fuse/core/FuseAnimate';
import FusePageCarded from '@fuse/core/FusePageCarded';
import Button from '@material-ui/core/Button';

import React, { useState, useRef } from 'react';
import Formsy from 'formsy-react';
import { TextFieldFormsy } from '@fuse/core/formsy';

import { useDispatch, useSelector } from 'react-redux';
import * as userActions from 'app/auth/store/actions';

const ProfilePage = () => {
	const dispatch = useDispatch();
	const user = useSelector(({ auth }) => auth.user);

	const [data, setData] = useState(user.data);
	const [isFormValid, setIsFormValid] = useState(false);
	const formRef = useRef(null);

	const disableButton = () => {
		setIsFormValid(false);
	};

	const enableButton = () => {
		setIsFormValid(true);
	};

	const handleSubmit = model => {
		const userData = { ...user.data, ...model };
		user.data = userData;

		dispatch(userActions.setUserData(user));
	};

	return (
		<FusePageCarded
			content={
				<FuseAnimate animation="transition.expandIn">
					<div className="p-16 sm:p-24">
						<h2 className="mb-32 text-center">Update profile</h2>
						<Formsy
							onValidSubmit={handleSubmit}
							onValid={enableButton}
							onInvalid={disableButton}
							ref={formRef}
							className="flex flex-col justify-center w-full"
						>
							<TextFieldFormsy
								className="mb-16"
								type="text"
								name="displayName"
								label="Display name"
								validations={{
									minLength: 4
								}}
								validationErrors={{
									minLength: 'Min character length is 4'
								}}
								variant="outlined"
								value={data.displayName || ''}
								required
							/>
							<TextFieldFormsy
								className="mb-16"
								type="text"
								name="email"
								label="Email"
								validations={{
									isEmail: true,
									maxLength: 50
								}}
								validationErrors={{
									isEmail: 'You have to type valid email',
									maxLength: 'You can not type in more than 50 characters'
								}}
								variant="outlined"
								value={data.email || ''}
								required
							/>
							<TextFieldFormsy
								className="mb-16"
								type="numberic"
								name="phoneNumber"
								label="Phone number"
								validations={{
									isNumeric: true,
									maxLength: 10
								}}
								validationErrors={{
									isNumeric: 'You have to type valid phone number',
									maxLength: 'You can not type in more than 10 numbers'
								}}
								variant="outlined"
								value={data.phoneNumber || ''}
								required
							/>
							<TextFieldFormsy
								className="mb-16"
								type="text"
								name="state"
								label="State"
								validations={{
									minLength: 4
								}}
								validationErrors={{
									minLength: 'Min character length is 4'
								}}
								variant="outlined"
								value={data.state || ''}
								required
							/>
							<TextFieldFormsy
								className="mb-16"
								type="text"
								name="city"
								label="City"
								validations={{
									minLength: 4
								}}
								validationErrors={{
									minLength: 'Min character length is 4'
								}}
								variant="outlined"
								value={data.city || ''}
								required
							/>
							<TextFieldFormsy
								className="mb-16"
								type="text"
								name="country"
								label="Country"
								validations={{
									minLength: 4
								}}
								validationErrors={{
									minLength: 'Min character length is 4'
								}}
								variant="outlined"
								value={data.country || ''}
								required
							/>
							<TextFieldFormsy
								className="mb-16"
								type="numberic"
								name="postcode"
								label="Post code"
								validations={{
									isNumeric: true,
									maxLength: 5
								}}
								validationErrors={{
									isNumeric: 'You have to type valid phone number',
									maxLength: 'You can not type in more than 5 numbers'
								}}
								variant="outlined"
								value={data.postcode || ''}
								required
							/>

							<Button
								type="submit"
								variant="contained"
								color="primary"
								className="mx-auto normal-case mt-16"
								aria-label="Update"
								disabled={!isFormValid}
							>
								Update
							</Button>
						</Formsy>
					</div>
				</FuseAnimate>
			}
		/>
	);
};

export default ProfilePage;
