/**
 * The global state selectors
 */
// TODO there is more to implement in here

const makeSelectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route');
    console.log('routing state', routingState);

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  }
};

export {
  makeSelectLocationState,
}