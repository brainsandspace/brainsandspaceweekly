// these are the pages you can go to

// TODO figure out what this is doing
import { getAsyncInjectors } from './utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err);
};

// TODO figure out what this does
const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // create reusable async injectors using getAsyncInjectors factory... what TODO
  const { injectReducer, injectSagas } = getAsyncInjectors(store);

  console.log('store passed to create Routes', store);
  return [
    {
      path: '/',
      name: 'searchResults',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('./containers/SearchResultsPage/reducer'),
          // import('containers/SearchResultsPage/sagas');
          import('./containers/SearchResultsPage')
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          // injectReducer('searchResults', reducer.default);
          // injectSagas(sagas.default);

          renderRoute(component);
        });
        
        importModules.catch(errorLoading);
      }
    }
  ]
}