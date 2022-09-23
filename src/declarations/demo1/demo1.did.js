export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'increaseVariable' : IDL.Func([], [], ['oneway']),
    'multiply' : IDL.Func([IDL.Nat, IDL.Nat], [], []),
    'withdraw' : IDL.Func([IDL.Nat], [], []),
    'withdrawl' : IDL.Func([IDL.Nat], [], ['oneway']),
  });
};
export const init = ({ IDL }) => { return []; };
