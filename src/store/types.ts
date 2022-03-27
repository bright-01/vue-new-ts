import { Mutations } from "@/store/mutations";
import { CommitOptions, DispatchOptions, Store } from "vuex";
import { RootState } from "@/store/state";
import { Actions } from "@/store/actions";

type MyMutations = {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
};

type MyActions = {
  dispatch<K extends keyof Actions>(
    key: K,
    payload?: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>;
};

export type MyStore =
  | Omit<Store<RootState>, "commit" | "dispatch">
  | (MyMutations & MyMutations & MyActions);

// 인터섹션( 합집합 & )
// type A = {
//   name : string
// }
// type B = {
//   age : number
// }
// type C = A & B;
// const Person : C ={
//   name : "a",
//   age : 10,
// }

// const person = {
//   name: "a",
//   age: 10,
//   skill: "js",
// };
// // Omit : 특정 타입만 빼고 다 갖겠다.
// let josh = Omit<person, "skill">
// josh = {
//   name : 'a',
//   age: 10
// }
