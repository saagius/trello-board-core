import 'dotenv/config';
import App from './app';
import IndexRoute from './routes/index.route';
import UsersRoute from './routes/users.route';
import AuthRoute from './routes/auth.route';
import validateEnv from './utils/validateEnv';
import BoardsRoute from './routes/boards.route';
import ListsRoute from './routes/lists.route';
import CardsRoute from './routes/cards.route';

validateEnv();

const app = new App([
  new IndexRoute(),
  new UsersRoute(),
  new AuthRoute(),
  new BoardsRoute(),
  new ListsRoute(),
  new CardsRoute()
]);

app.listen();