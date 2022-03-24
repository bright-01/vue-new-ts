import { Mutations } from "@/store/mutations";
import { CommitOptions, Store } from "vuex";
import { RootState } from "@/store/state";

type MyMutations = {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
};

export type MyStore = Omit<Store<RootState>, "commit"> & MyMutations;

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
