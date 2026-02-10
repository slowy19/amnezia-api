import { ITask } from "@/types/cron";
import { cleanupExpiredClientsTask } from "@/tasks";

export namespace CronContract {
  /**
   * Очистка просроченных клиентов (каждый день в 3:00)
   */
  export const CleanupExpiredClientsTask: ITask = {
    name: "CleanupExpiredClientsTask",
    schedule: "0 3 * * *", // Каждый день в 3:00 утра
    handler: cleanupExpiredClientsTask,
  };
}
