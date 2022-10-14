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
        .order("id", { ascending: false });
      tasks.value = tasks;
      return tasks;
    },
    // ADD TASK
    async addTask(title, description) {
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

    //CHECK TASK
    async checkTask(taskId, check ) {
      const { data, error } = await supabase
        .from("tasks")
        .update({ is_complete: !check })
        .match({ id: taskId });
    },

    //EDIT TASK
    async editTask(taskId, title, description) {
      const { data, error } = await supabase
        .from("tasks")
        .update({ title: title, description: description })
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
