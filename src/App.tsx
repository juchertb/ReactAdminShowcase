import polyglotI18nProvider from 'ra-i18n-polyglot';
import {
  Admin,
  Resource,
  localStorageStore,
  useStore,
  StoreContextProvider,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
  CustomRoutes,
} from "react-admin";
import Layout from "./layout/Layout";
import { dataProvider } from "./dataProvider";
// Post pages
import PostList from "./pages/posts/post-list";
import PostShow from "./pages/posts/post-show";
import PostEdit from "./pages/posts/post-edit";
import PostCreate from "./pages/posts/post-create";
// Todo pages
import TodoList from "./pages/todos/todo-list";
import TodoShow from "./pages/todos/todo-show";
import TodoCreate from "./pages/todos/todo-create";
import TodoEdit from "./pages/todos/todo-edit";
// User pages
import UserList from "./pages/users/user-list";
import UserShow from "./pages/users/user-show";
import UserCreate from "./pages/users/user-create";
import UserEdit from "./pages/users/user-edit";
// Comments pages
import CommentList from "./pages/comments/comments-list";
import CommentShow from "./pages/comments/comments-show";
import CommentCreate from "./pages/comments/comments-create";
import CommentEdit from "./pages/comments/comments-edit";
// Icons
import ArticleIcon from "@mui/icons-material/Article";
import PersonIcon from "@mui/icons-material/Person";
import AssignmentIcon from '@mui/icons-material/Assignment';
import ReviewsIcon from '@mui/icons-material/Reviews';

import { authProvider } from "./authProvider";
import englishMessages from './i18n/en';
import frenchMessages from './i18n/fr';
import { themes, ThemeName } from './themes/themes';

import invoices from './invoices';
import { Dashboard } from './dashboard/Dashboard';
//import frenchMessages from 'ra-language-french';

const i18nProvider = polyglotI18nProvider(
  locale => {
      if (locale === 'fr') {
          return import('./i18n/fr').then(messages => messages.default);
      }

      // Always fallback on english
      //return englishMessages;
      return frenchMessages;
  },
  'en',
  [
      { locale: 'en', name: 'English' },
      { locale: 'fr', name: 'Français' },
  ]
);

const store = localStorageStore(undefined, 'ECommerce');

export const App = () => {

  const [themeName] = useStore<ThemeName>('themeName', 'house');
  const lightTheme = themes.find(theme => theme.name === themeName)?.light;
  const darkTheme = themes.find(theme => theme.name === themeName)?.dark;

  return (
    <Admin 
      layout={Layout} 
      dataProvider={dataProvider} 
      dashboard={Dashboard} 
      authProvider={authProvider}
      i18nProvider={i18nProvider}
      disableTelemetry
      lightTheme={lightTheme}
      darkTheme={darkTheme}
      defaultTheme="light"
      store={store}
      >
      <Resource 
        icon={ArticleIcon}
        name="posts" 
        list={PostList} 
        edit={PostEdit} 
        show={PostShow}
        create={PostCreate} />
      <Resource 
        icon={PersonIcon}
        name="users" 
        list={UserList} 
        edit={UserEdit} 
        show={UserShow}
        create={UserCreate} />
      <Resource 
        icon={AssignmentIcon}
        name="todos"
        list={TodoList}        
        edit={TodoEdit} 
        show={TodoShow}
        create={TodoCreate} />
      <Resource 
        icon={ReviewsIcon}
        name="comments"
        list={CommentList}        
        edit={CommentEdit} 
        show={CommentShow}
        create={CommentCreate} />
      <Resource name="invoices" {...invoices} />
    </Admin>
  );
};


const AppWrapper = () => (
  <StoreContextProvider value={store}>
      <App />
  </StoreContextProvider>
);

export default AppWrapper;

