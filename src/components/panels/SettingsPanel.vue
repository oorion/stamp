<template>
<div class="column full-height">
  <contact-card
    :address="getMyAddressStr"
    :name="getProfile.name"
    :bio="getProfile.bio"
    :avatar="getProfile.avatar"
    :acceptancePrice="getInbox.acceptancePrice"
  />

  <!-- New contact dialog -->
  <q-dialog v-model="newContactOpen">
    <new-contact-dialog />
  </q-dialog>

  <!-- Contact book dialog -->
  <q-dialog v-model="contactBookOpen">
    <contact-book-dialog :contactClick="function (addr, contact) { return setActiveChat(addr) }" />
  </q-dialog>

  <!-- Contact book dialog -->
  <q-dialog v-model="sendAddressOpen">
    <send-address-dialog />
  </q-dialog>

  <!-- Wallet dialog -->
  <q-dialog v-model="walletOpen">
    <wallet-dialog />
  </q-dialog>

  <!-- Profile dialog -->
  <q-dialog v-model="profileOpen">
    <profile-dialog :currentProfile="getProfile" />
  </q-dialog>

  <!-- Settings dialog -->
  <q-dialog v-model="settingsOpen">
    <settings-dialog />
  </q-dialog>
  <div class="flex-break" />
  <!-- Drawer -->
  <q-scroll-area class="col" >
    <q-list padding>
      <q-item clickable v-ripple @click="newContactOpen = true">
        <q-item-section avatar>
          <q-icon name="add_comment" />
        </q-item-section>

        <q-item-section>New Contact</q-item-section>
      </q-item>
      <q-item clickable v-ripple @click="contactBookOpen = true">
        <q-item-section avatar>
          <q-icon name="contacts" />
        </q-item-section>

        <q-item-section>Contacts</q-item-section>
      </q-item>

      <q-separator />

      <q-item clickable v-ripple @click="sendAddressOpen = true">
        <q-item-section avatar>
          <q-icon name="send" />
        </q-item-section>

        <q-item-section>Send to Address</q-item-section>
      </q-item>

      <q-item clickable v-ripple @click="walletOpen = true">
        <q-item-section avatar>
          <q-icon name="account_balance_wallet" />
        </q-item-section>

        <q-item-section>Wallet</q-item-section>
      </q-item>

      <q-separator />

      <q-item clickable v-ripple @click="profileOpen = true">
        <q-item-section avatar>
          <q-icon name="face" />
        </q-item-section>

        <q-item-section>Profile</q-item-section>
      </q-item>

      <q-item clickable v-ripple @click="settingsOpen = true">
        <q-item-section avatar>
          <q-icon name="tune" />
        </q-item-section>

        <q-item-section>Settings</q-item-section>
      </q-item>
    </q-list>
  </q-scroll-area>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ContactCard from './ContactCard.vue'
import NewContactDialog from '../dialogs/NewContactDialog.vue'
import ContactBookDialog from '../dialogs/ContactBookDialog.vue'
import WalletDialog from '../dialogs/WalletDialog.vue'
import ProfileDialog from '../dialogs/ProfileDialog.vue'
import SendAddressDialog from '../dialogs/SendAddressDialog.vue'
import SettingsDialog from '../dialogs/SettingsDialog.vue'

export default {
  components: {
    ContactCard,
    NewContactDialog,
    ContactBookDialog,
    WalletDialog,
    ProfileDialog,
    SendAddressDialog,
    SettingsDialog
  },
  data () {
    return {
      newContactOpen: false,
      sendAddressOpen: false,
      contactBookOpen: false,
      walletOpen: false,
      profileOpen: false,
      settingsOpen: false
    }
  },
  props: ['drawerOpen'],
  model: {
    prop: 'drawerOpen',
    event: 'update:drawerOpen'
  },
  methods: {
    ...mapActions({
      setDrawerOpen: 'myDrawer/setDrawerOpen',
      addNewContact: 'contacts/addNewContact',
      setActiveChat: 'chats/setActiveChat'
    }),
    getIdentityPrivKey () {
      return this.$wallet.identityPrivKey
    }
  },
  computed: {
    ...mapGetters({
      getProfile: 'myProfile/getProfile',
      getInbox: 'myProfile/getInbox'
    }),
    getMyAddressStr () {
      return this.$wallet.myAddressStr
    },
    drawerOpenModel: {
      get () {
        return this.drawerOpen
      },
      set (value) {
        this.$emit('update:drawerOpen', value)
      }
    }
  }
}
</script>
