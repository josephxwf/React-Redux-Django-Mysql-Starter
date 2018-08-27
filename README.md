# React-Django-Mysql-Starter

# Front-end setup
---------------

# 1. Routes in app.js
```javascript
<Switch>
  <Route exact path="/" component={Landing} />
  <Route exact path="/coachRouter" component={CoachRouter} />
  
</Switch>
```
# 2. Packages
```json
{
  "name": "react-app",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^16.4.2",
    "react-dom": "^16.4.2",
    "react-scripts": "1.1.5",
    "axios": "^0.18.0",
    "react-redux": "^5.0.7",
    "redux": "^4.0.0",
    "redux-form": "^7.4.2",
    "redux-thunk": "^2.3.0",
    "react-router-dom": "^4.3.1",
    "react-scrollchor": "^6.0.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
}

```
# 3. Redux
### actions
> ###### /react-app/src/actions/index.js

```javascript
import {
  SET_PRODUCT_NAME_IN_REDUX_STORE,
  CREATE_PRODUCT_IN_MYSQL,
  GET_PRODUCT_DETAIL
} from "./types";
```

### connecting to redux
> ###### /react-app/src/components/Price/PriceForm.js

``` javascript
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getProductDetail } from "../../actions";

import "../Forms/form.css";

class PriceForm extends Component {
  constructor(props) {
    super(props);

    this.state = { product: "GZ" };
  }

  componentWillMount() {
    this.props.getProductDetail(this.props.params.code);
  }

  render() {
    const { productDetail } = this.props;
    return (
      <div>
        <h3>Product Name</h3>
        <h3>Product Description</h3>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getProductDetail }, dispatch);
}

function mapStateToProps({ productDetail }) {
  return { productDetail };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PriceForm);

```

### reducers
> ###### /react-app/src/reducers/index.js

```javascript
export default combineReducers({
  form: reduxForm,
  productDetail: getProductDetailReducer,
  productCreated: createProductReducer,
  productName: setProductNameReducer
});

```

# 4. Components
* ### components
  * #### Coach
    * ##### CoachRouter.js
    * ##### CoachFirstPage.js
    * ##### CoachSecondPage.js
    * ##### CoachThirdPage.js
   
  
  * #### Landing
    * ##### Landing.js
  * #### Price
    * ##### PriceForm.js
    * ##### PriceField.js

  
# 5. Deploying
```bash
npm run build
```
Copy dist folder to s3


# Back-end Setup
---------------

  # 1. Set up virtualenv
  ```bash
  $ pip3 install virtualenv
  ```

  # 2. Make sure MySQL is installed
  check if database exists and you can connect to it
  ```bash
  mysql -u root -p mydatabase
  ```

  # 3. Make sure correct version of django is installed and other pip packages
  connecting to database requires a specific drive to connect to the mysql database  
  make sure you can connect with the settings in : 
  > ###### /djangobackend/settings.py

  ```python
  DATABASES = {
      'default': {        
          'NAME': 'mydatabase',        
          'ENGINE': 'django.db.backends.mysql',
          'USER': 'root',
          'PASSWORD': 'password',
          'HOST': 'localhost',
          'PORT': ''
      }
  }
  ```
  ```bash
  (py1) Swapnils-MBP:linchpin iamwetalldid$ pip3 freeze
  Django==2.0.7
  django-cors-headers==2.3.0
  mysql-connector-python==8.0.11
  mysqlclient==1.3.13
  protobuf==3.6.0
  pytz==2018.5
  six==1.11.0
  (py1) Swapnils-MBP:linchpin iamwetalldid$ 
  ```

  # 4. Setup django app (insurance) and then create models inside it

  > ###### /djangobackend/app/models.py

  ```python
  
  ```

  # 5. Setup routes

  > ###### /djangobackend/app/urls.py


  # 6. Run migrations to update for any changes in models
  ```bash
  python3 manage.py makemigrations insurance
  python3 manage.py migrate
  ```

  # 7. Import data from sql dump
  ```bash
  mysql -u root -p mydatabase < mydatbase.sql
  ```

  # 8. Start server and test endpoints
  ```bash
  python3 manage.py runserver
  ```


