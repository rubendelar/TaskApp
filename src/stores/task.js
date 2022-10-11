import { defineStore } from "pinia";
import { supabase } from "../supabase";
import { useUserStore } from "./user";

export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: null,
  }),
  actions: {
    async fetchTasks() {
      const { data: tasks } = await supabase
        .from("tasks")
        .select("*")
        .order("id", { ascending: true });
      tasks.value = tasks;
      return tasks;
    },
    // ADD TASK
    async addTask(title, description, time) {
      console.log(useUserStore().user.id);
      const { data, error } = await supabase.from("tasks").insert([
        {
          user_id: useUserStore().user.id,
          title: title,
          is_complete: false,
          description: description,
        },
      ]);
    },
    //EDIT TASK
    async editTask(taskId, title, description, time) {
      const { data, error } = await supabase
        .from("tasks")
        .update({ title: title, description: description, time: time, })
        .match({ id: taskId });
    },
    //REMOVE TASK
    async deleteTask(id) {
      const { data, error } = await supabase
        .from("tasks")
        .delete()
        .match({ id: id });
    },
  },
});
