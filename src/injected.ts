/**
 *  Decorator @injected or Function injected
 * declare Class which need be injected
 *
 * @export
 * @param {Function} _constructor
 * @returns {Function}
 */
export function Injected(_constructor: Function): Function {
  if ((_constructor as any)._needInjectedClas) console.log(44444444444);
  // through Reflect to get params types
//   const paramsTypes: Function[] = Reflect.getMetadata('design:paramtypes', _constructor);
//   if (paramsTypes && paramsTypes.length) {
//       paramsTypes.forEach(v => {
//           if (v === _constructor) {
//               throw new Error('不可以依赖自身');
//           } else {
//               if ((_constructor as any)._needInjectedClass) {
//                   (_constructor as any)._needInjectedClass.push(v);
//               } else {
//                   (_constructor as any)._needInjectedClass = [v];
//               }
//           }
//       });
//   }
  return _constructor;
}
