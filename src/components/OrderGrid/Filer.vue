<template>
  <div class="order-grid-filter">
    <b-row>
      <b-col cols="4">
        <div>
          <b-icon icon="calendar2-date" aria-hidden="true" />
          <b-icon
            icon="chevron-left"
            aria-hidden="true"
            @click="minusDay"
          ></b-icon>
          {{ today.format("D MMM YYYY") }}
          <b-icon
            icon="chevron-right"
            aria-hidden="true"
            @click="addDay"
          ></b-icon>
        </div>
      </b-col>
      <b-col cols="8">
        <b-row>
          <b-col cols="9">
            <div class="order-grid-filter__commands">
              <b-form-datepicker
                id="example-datepicker"
                v-model="start"
                placeholder="Baslangic Tarihi"
                class="mb-2"
                locale="tr"
                :date-disabled-fn="startDateDisabled"
              ></b-form-datepicker>
              <span class="order-grid-filter__commands__dash">
                <b-icon icon="dash" aria-hidden="true"></b-icon>
              </span>
              <b-form-datepicker
                locale="tr"
                id="example-datepickers"
                v-model="end"
                placeholder="Bitis Tarihi"
                class="mb-2"
                :date-disabled-fn="endDateDisabled"
              ></b-form-datepicker>
            </div>
          </b-col>
          <b-col cols="3" class="order-grid-filter__btns">
            <b-button
              variant="outline-primary"
              :disabled="!isThereAnyChanges"
              @click="filter"
              >Filtrele</b-button
            >
            <b-button
              variant="outline-primary"
              @click="clear"
              :disabled="!isThereAnyChanges"
              >Temizle</b-button
            >
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import dayjs from "dayjs";
require("dayjs/locale/tr");
dayjs.locale("tr");
const defaultValue = {
  today: dayjs(),
  start: undefined,
  end: undefined,
};

export default {
  data() {
    return {
      ...defaultValue,
    };
  },
  computed: {
    isThereAnyChanges() {
      const data = {
        today: this.today,
        start: this.start,
        end: this.end,
      };
      return JSON.stringify(defaultValue) != JSON.stringify(data);
    },
  },
  methods: {
    filter() {
      this.$emit("change", {
        today: this.today,
        start: this.start,
        end: this.end,
      });
    },
    clear() {
      this.today = dayjs();
      this.start = undefined;
      this.end = undefined;
      this.filter();
    },
    addDay() {
      this.today = this.today.add(1, "day");
    },
    minusDay() {
      this.today = this.today.add(-1, "day");
    },
    startDateDisabled(ymd, date) {
      if (this.end) {
        return new Date(this.end).getTime() < date.getTime();
      } else {
        return false;
      }
    },
    endDateDisabled(ymd, date) {
      if (this.start) {
        return new Date(this.start).getTime() > date.getTime();
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/colors";

.order-grid-filter {
  color: $alphaGray;
  &__commands {
    display: flex;
    border: 1px solid $orange;
    border-radius: 500px;
    .b-form-btn-label-control {
      margin: 0 !important;
      border: 0;
      border-radius: 500px;
      width: 47.5%;
    }
    &__dash {
      width: 5%;
      border-left: 1px solid $orange;
      border-right: 1px solid $orange;

      text-align: center;
      line-height: 38px;
    }
  }
}

.b-form-btn-label-control {
  width: 30%;
  &.form-control > .form-control {
    white-space: nowrap;
  }
}

.btn {
  border-radius: 500px;
  margin-left: 12px;
  color: $alphaGray;
  border-color: $orange;
}
</style>