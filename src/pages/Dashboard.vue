<template>
  <q-page padding>
    <!-- Dialog Create -->
    <q-dialog v-model="createDialog">
      <q-card style="width: 500px">
        <q-toolbar>
          <q-toolbar-title class="text-center">Create Data</q-toolbar-title>
        </q-toolbar>
        <q-card-section>
          <q-card-item>
            <q-input label="Name" v-model="input.name"></q-input>
            <q-input label="Area" v-model="input.area"></q-input>
          </q-card-item>

          <q-card-item class="q-mt-md">
            <q-btn
              label="submit"
              class="bg-primary text-white q-mt-xl q-mr-sm"
              @click="addData()"
            ></q-btn>
            <q-btn v-close-popup label="cancel" class="q-mt-xl"></q-btn>
          </q-card-item>
        </q-card-section>
      </q-card>
    </q-dialog>

    <!-- Dialog Create -->
    <q-dialog v-model="dialogEdit">
      <q-card style="width: 500px">
        <q-toolbar>
          <q-toolbar-title class="text-center">Edit Data</q-toolbar-title>
        </q-toolbar>
        <q-card-section>
          <q-card-item>
            <q-input label="Name" v-model="input.name"></q-input>
            <q-input label="Area" v-model="input.area"></q-input>
          </q-card-item>

          <q-card-item class="q-mt-md">
            <q-btn
              label="submit"
              class="bg-primary text-white q-mt-xl q-mr-sm"
              @click="editData()"
            ></q-btn>
            <q-btn v-close-popup label="cancel" class="q-mt-xl"></q-btn>
          </q-card-item>
        </q-card-section>
      </q-card>
    </q-dialog>

    <!-- Delete Dialog -->
    <q-dialog v-model="dialogDelete">
      <q-card style="width: 500px">
        <q-toolbar>
          <q-toolbar-title class="text-center">Are you sure???</q-toolbar-title>
        </q-toolbar>
        <q-card-section class="text-center">
          <q-card-label> Are you sure this data will be deleted? </q-card-label>
        </q-card-section>
        <q-btn
          label="Delete"
          class="bg-primary text-white"
          @click="deleteData"
        ></q-btn>
        <q-btn label="Back" v-close-popup class="q-mx-md"></q-btn>
      </q-card>
    </q-dialog>

    <q-btn
      label="Create Data"
      class="bg-primary text-white q-my-md"
      @click="createDialog = true"
    ></q-btn>

<<<<<<< HEAD
          <template v-slot:header="props">
            <q-tr :props="props">
              <q-th
                v-for="col in props.cols"
                :key="col.name"
                :props="props"
                auto-width
                class="wrap justify-center items-center"
              >
                {{ $t(`columns.${col.name}`) }}
              </q-th>
            </q-tr>
          </template>

          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td class="text-center">{{ props.rowIndex + 1 }}</q-td>
              <q-td class="text-center">{{ props.row.notes }}</q-td>
              <q-td class="text-center">{{ props.row.created_at }}</q-td>
              <q-td class="text-center">{{ props.row.created_by }}</q-td>
              <q-td class="text-center">{{ props.row.status }}</q-td>
              <q-td class="text-center">
                <q-btn
                  @click="openEditDialog(props.row)"
                  color="warning"
                  icon="edit"
                  class="items-end"
                >
                  <q-tooltip class="bg-primary" :offset="[10, 10]">
                    {{ $t('editNote') }}
                  </q-tooltip>
                </q-btn>
                <q-btn
                  @click="openDeleteDialog(props.row)"
                  color="negative"
                  icon="delete"
                  class="items-end"
                >
                  <q-tooltip class="bg-primary" :offset="[10, 10]">
                    {{ $t('deleteNote') }}
                  </q-tooltip>
                </q-btn>
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </div>
    </div>
=======
    <!-- Main Page -->
    <q-table :columns="columns" :rows="rows">
      <template #body="props">
        <q-tr :props="props">
          <q-td class="text-center">{{ props.rowIndex + 1 }}</q-td>
          <q-td>{{ props.row.name }}</q-td>
          <q-td>{{ props.row.area }}</q-td>
          <q-td>
            <!-- Button Main Page -->
            <q-btn
              icon="edit"
              color="warning"
              @click="editDialog(props.row)"
            ></q-btn>
            <q-btn
              icon="delete"
              color="negative"
              @click="deleteDialog(props.row)"
            ></q-btn>
          </q-td>
        </q-tr>
      </template>
    </q-table>
>>>>>>> dev
  </q-page>
</template>

<script lang="ts">
<<<<<<< HEAD
import { defineComponent, ref, Ref } from 'vue';
import { date } from 'quasar';
=======
import { defineComponent, ref } from 'vue';
>>>>>>> dev
import { uid } from 'quasar';

// Mengvalidasi data yang di kirim
interface tableType {
  name: string;
  label: string;
  field: string;
  align: 'center' | 'left' | 'right';
}

interface dataType {
  id?: string;
  name: string;
  area: string;
}

export default defineComponent({
  name: 'DashboardTodo',
  setup() {
    const createDialog = ref(false);
    const dialogEdit = ref(false);
    const dialogDelete = ref(false);

    const dataTable = ref(-1);

    const columns: tableType[] = [
      {
        name: 'id',
        label: 'ID',
        field: 'id',
        align: 'center',
      },
      {
        name: 'name',
        label: 'NAME',
        field: 'name',
        align: 'left',
      },
      {
        name: 'area',
        label: 'AREA',
        field: 'area',
        align: 'left',
      },
      {
        name: 'action',
        label: 'ACTION',
        field: 'action',
        align: 'left',
      },
    ];

    const rows = ref([
      {
        id: uid(),
        name: 'Hotel Rawasari',
        area: 'Jakarta Pusat',
      },
    ]);
<<<<<<< HEAD
    const dialogAddNotes: Ref<boolean> = ref(false);
    const dialogEditNote = ref(false);
    const dialogDeleteNote = ref(false);
=======

>>>>>>> dev
    const input = ref({
      name: '',
      area: '',
    });
<<<<<<< HEAD
    const editingNote: Ref<boolean> = ref(false);
    const editingNoteIndex = ref(-1);
    const openAddDialog = (edit: boolean) => {
      dialogAddNotes.value = true;
      editingNote.value = edit;
    };
    const openEditDialog = (note: string) => {
      input.value.notes = note.notes;
      input.value.created_by = note.created_by;
      editingNoteIndex.value = rows.value.findIndex((x) => x.no === note.no);
      dialogEditNote.value = true;
    };
    const openDeleteDialog = (note) => {
      input.value.notes = note.notes;
      input.value.created_by = note.created_by;
      editingNoteIndex.value = rows.value.findIndex((x) => x.no === note.no);
      dialogDeleteNote.value = true;
    };
    const addNotes = () => {
=======

    // Menambahkan data
    const addData = () => {
>>>>>>> dev
      rows.value.push({
        id: uid(),
        name: input.value.name,
        area: input.value.area,
      });

      createDialog.value = false;
    };

    // Mengedit Data
    const editDialog = (data: dataType) => {
      input.value.name = data.name;
      input.value.area = data.area;

      dataTable.value = rows.value.findIndex((x) => data.id === x.id);
      dialogEdit.value = true;
    };

    const editData = () => {
      if (dataTable.value !== -1) {
        rows.value[dataTable.value].name = input.value.name;
        rows.value[dataTable.value].area = input.value.area;
      }

      dialogEdit.value = false;
    };

    // Menghapus Data
    const deleteDialog = (data: dataType) => {
      dataTable.value = rows.value.findIndex((x) => data.id === x.id);

      dialogDelete.value = true;
    };

    const deleteData = () => {
      if (dataTable.value !== -1) {
        rows.value.splice(dataTable.value, 1);
        dialogDelete.value = false;
      }
    };

    return {
      columns,
      rows,
      createDialog,
      input,
      addData,
      editDialog,
      dialogEdit,
      editData,
      dialogDelete,
      deleteData,
      deleteDialog,
    };
  },
});
</script>
