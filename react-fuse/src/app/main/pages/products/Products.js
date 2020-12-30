import FusePageCarded from '@fuse/core/FusePageCarded';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles(theme => ({
	layoutRoot: {}
}));

function ProductsPage(props) {
	const classes = useStyles(props);

	return (
		<FusePageCarded
			classes={{
				root: classes.layoutRoot
			}}
			header={
				<div className="p-24">
					<h4>TITLE</h4>
				</div>
			}
			contentToolbar={
				<div className="px-24">
					<h4>Content Toolbar</h4>
				</div>
			}
			content={
				<div className="p-24">
					<h4>Content</h4>
					<br />
					<h5>
						In excepteur dolore reprehenderit ad proident laborum. Qui est exercitation nisi qui cillum commodo. Id irure ex anim velit do pariatur dolor adipisicing amet in eu. Dolore irure veniam proident quis et veniam deserunt occaecat anim et et consectetur nostrud.

						Pariatur nisi tempor duis magna anim culpa deserunt non ut proident velit occaecat qui enim. Nisi non labore pariatur in eu et in occaecat aliquip sunt excepteur. Ea id nostrud culpa labore elit aute nostrud eu deserunt laborum laboris exercitation. Adipisicing quis reprehenderit commodo labore sunt ullamco aliqua minim.

						Est amet eiusmod consequat reprehenderit nisi Lorem incididunt id. Irure aliquip enim excepteur ipsum deserunt aliquip minim nostrud est est occaecat ut. Duis quis officia cupidatat culpa commodo. Et qui duis non dolore qui do qui laborum est eu occaecat reprehenderit.

						Ad irure consectetur officia sunt laborum duis ipsum. Deserunt fugiat eiusmod proident sint anim magna ut veniam. Ea Lorem proident consectetur ad deserunt Lorem id ea est proident fugiat occaecat. Incididunt cillum ex enim adipisicing aliqua id exercitation fugiat excepteur esse enim deserunt ex culpa. Adipisicing commodo incididunt elit nostrud duis elit aliqua mollit.

						Sint laboris consectetur exercitation fugiat velit commodo culpa ipsum laborum. Culpa eu veniam reprehenderit id minim in sunt. Est cillum qui cupidatat labore ullamco aute excepteur dolore et aliqua cillum labore adipisicing ad. Officia pariatur do excepteur aliqua. Occaecat occaecat adipisicing qui excepteur esse aliquip aute ullamco ipsum enim consequat ut laborum et.
					</h5>
				</div>
			}
		/>
	);
}

export default ProductsPage;
