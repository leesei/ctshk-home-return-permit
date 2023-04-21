// ==================================== //
// 申請人資料
const applicant = {
  // 回鄉證證件號碼
  passId: "H1234567800",
  // 證件簽發日期, "YYYY-MM-DD"
  passIssueDate: "2013-01-10",
  // 證件有效期至, "YYYY-MM-DD"
  passExpireDate: "2023-01-09",
  // 姓
  chiSurname: "姓",
  // 名
  chiFirstName: "名",
  // (可選填) 曾用名
  chiOldName: "曾用名",
  // surname
  engSurname: "surname",
  // first name
  engFirstName: "first name",
  // (可選填) "old name"
  engOldName: "old name",
  // 性別, 選項
  // 1: 男性, 2: 女性
  sex: 1,
  // 出生日期, "YYYY-MM-DD"
  birthDate: "1988-01-01",
  // 出生地, 選項
  // "HKG": 香港, "MAC": 澳門, "TWN": 臺灣, "mainland": 內地, "foreign": 國外
  birthPlace: "mainland",
  // 以下兩項為 內地 必填
  // 出生地（內地）, 選項
  // "44": 廣東, "35": 福建, "31": 上海, "11": 北京, "51": 四川, "43": 湖南, "33": 浙江, "32": 江蘇, "42": 湖北, "50": 重慶, "46": 海南, "45": 廣西, "12": 天津, "37": 山東, "53": 雲南, "41": 河南, "22": 吉林, "52": 貴州, "13": 河北, "34": 安徽, "21": 遼寧, "23": 黑龍江, "36": 江西, "14": 山西, "61": 陝西, "15": 內蒙古, "62": 甘肅, "64": 寧夏, "63": 青海, "65": 新疆, "54": 西藏
  birthPlaceML: "44",
  // 出生地（中國縣市）, 部份 出生地（內地）必填
  birthPlaceDetail: "廣州",

  // 中國國籍的獲得, 選項
  // 1: 具有中國血統的香港居民或香港永久性居民, 2, 原外國籍、無國籍或國籍不明，經申請加入中國國籍的香港永久性居民
  nationType: 1,
  // 職業, 選項
  // "職員", "退休", "家管", "學生", "服務人員", "工人", "其他人員", "無業人員", "自由職業者", "商人", "技術人員", "教育工作者", "企管人員", "醫務工作者", "警務人員", "財會人員", "科技人員", "社會工作者", "新聞工作者", "律師", "公職人員", "文化工作者", "體育工作者", "宗教人士", "農林牧漁人員", "司法工作者", "軍人"
  occupation: "退休",

  // 居住地, 選項
  // "香港", ~~"內地"~~
  // "內地"未測試
  residence: "香港",
  // 香港分區, 選項
  // "九龍", "香港島", "離島", "新界"
  homeArea: "九龍",
  // 住址街道及門牌/地段
  homeAddr1: "九龍東1號",
  // 住宅名稱
  homeAddr2: "九龍東大廈",
  // 座號樓層及單位號
  homeAddr3: "11A室",
  // 港澳聯繫電話
  hkPhone: "12345678",
  // (可選填) 內地聯繫號碼
  mainlandPhone: "12345678901",
  // (可選填) "電郵地址"
  email: "me@example.com",
  // 港澳居民證件, 選項
  // "A": 香港永久性居民身份證, "B": 香港出生證明, "B1": 香港居民身份證, "D": 香港簽證身份書, "R": 香港回港證
  docType: "A",
  // 港澳居民證件號碼,
  // 香港永久性居民身份證, 香港出生證明, 香港居民身份證: /^([A-Z]{1,2}[0-9]{6})\(([A-Z0-9])\)$/
  // 香港簽證身份書, 香港回港證: 不作驗證
  docId: "E848636(4)",

  // 以下兩項為 香港永久性居民身份證, 香港居民身份證 必填
  // 其他證件請刪除
  // 香港身份證首發日期, "MM-YY"
  docFirstIssue: "01-99",
  // 現持身份證簽發日期, "DD-MM-YY"
  docIssueDate: "15-09-18",

  // 持有香港永久性居民身份證, 是/否 選項按鈕
  isHkResident: true,
  // 回鄉證上的姓名、性別和出生日期均與香港身份證一致沒有變更, 是/否 選項按鈕
  isInfoNotChange: true,

  // *主要親屬*
  // 父親狀況, 選項
  // "健在且有聯繫", "已身故", "失去聯繫未能提供", "本人孤兒未能提供"
  fatherSituation: "健在且有聯繫",
  // 父親姓名, "失去聯繫未能提供", "本人孤兒未能提供" 以外必填
  fatherName: "父親",
  // (可選填) 父親聯絡電話
  // 母親狀況, 選項
  // "健在且有聯繫", "已身故", "失去聯繫未能提供", "本人孤兒未能提供"
  motherSituation: "健在且有聯繫",
  // 母親姓名, "失去聯繫未能提供", "本人孤兒未能提供" 以外必填
  motherName: "母親",
  // (可選填) 母親聯絡電話
  // 配偶狀況, 選項
  // "有", "沒有", "已身故"
  spouseSituation: "有",
  // 配偶姓名, "沒有", "已身故" 以外必填
  spouseName: "配偶",
  // 子女狀況, 選項
  // "有", "沒有", "已身故"
  childSituation: "有",
  // 子女姓名, "沒有", "已身故" 以外必填
  childName: "子女",
};
// ==================================== //

const formFieldMap = [
  { selector: "#idValue", type: "string", field: "passId" },
  {
    selector: [
      "input[name='repIssueYear1']",
      "input[name='repIssueMonth1']",
      "input[name='repIssueDay1']",
    ],
    type: "date",
    field: "passIssueDate",
  },
  {
    selector: [
      "input[name='repExpireYear1']",
      "input[name='repExpireMonth1']",
      "input[name='repExpireDay1']",
    ],
    type: "date",
    field: "passExpireDate",
  },
  {
    selector: "input[name='chiSrnm1']",
    type: "string",
    field: "chiSurname",
  },
  {
    selector: "input[name='chiFrst1']",
    type: "string",
    field: "chiFirstName",
  },
  {
    selector: "input[name='srnm1']",
    type: "string",
    field: "engSurname",
  },
  {
    selector: "input[name='frst1']",
    type: "string",
    field: "engFirstName",
  },
  { selector: "select[name='sex1']", type: "option", field: "sex" },
  {
    selector: [
      "input[name='bthYear1']",
      "input[name='bthMonth1']",
      "input[name='bthDay1']",
    ],
    type: "date",
    field: "birthDate",
  },
  {
    selector: "select[name='brthPlace1']",
    type: "option",
    field: "birthPlace",
    callback: () => {
      showBrthPlaceField();
    },
  },
  {
    selector: "select[name='brthPlaceML1']",
    type: "option",
    field: "birthPlaceML",
    callback: ($node) => {
      showBrthPlaceDtl($node.find("option[selected='selected']").val());
    },
  },
  {
    selector: "input[name='brthPlaceDtl1']",
    type: "string",
    field: "birthPlaceDetail",
  },

  {
    selector: "select[name='chnNationTypeSelection']",
    type: "option",
    field: "nationType",
    callback: ($node) => {
      changeChnNationType($node);
    },
  },
  {
    selector: "select[name='occupation1']",
    type: "option",
    field: "occupation",
  },
  {
    selector: "select[name='homeType1']",
    type: "option",
    field: "residence",
    callback: () => {
      showAreaDistrictSelection();
    },
  },
  {
    selector: "select[name='homeArea1']",
    type: "option",
    field: "homeArea",
  },
  {
    selector: "input[name='homeAddr1']",
    type: "string",
    field: "homeAddr1",
  },
  {
    selector: "input[name='homeAddr2']",
    type: "string",
    field: "homeAddr2",
  },
  {
    selector: "input[name='homeAddr3']",
    type: "string",
    field: "homeAddr3",
  },
  {
    selector: "#phoneNo",
    type: "string",
    field: "hkPhone",
  },
  {
    selector: "#phoneNoML",
    type: "string",
    field: "mainlandPhone",
  },
  {
    selector: "#email",
    type: "string",
    field: "email",
  },
  {
    selector: "select[name='docType1']",
    type: "option",
    field: "docType",
    callback: () => {
      changeDocType();
    },
  },
  {
    selector: ["#docNmbr", "input[name='docNmbrValidation1']"],
    type: "hkid",
    field: "docId",
  },
  {
    selector: [
      "input[name='docfrstIssMonth1']",
      "input[name='docfrstIssYear1']",
    ],
    type: "issue-date",
    field: "docFirstIssue",
  },
  {
    selector: [
      "input[name='docIssDay1']",
      "input[name='docIssMonth1']",
      "input[name='docIssYear1']",
    ],
    type: "issue-date",
    field: "docIssueDate",
  },
  {
    selector: [
      "input[name='isHKres'][value='Y']",
      "input[name='isHKres'][value='N']",
    ],
    type: "boolean",
    field: "isHkResident",
  },
  {
    selector: [
      "input[name='infoNotChange'][value='Y']",
      "input[name='infoNotChange'][value='N']",
    ],
    type: "boolean",
    field: "isInfoNotChange",
  },
  {
    selector: "select[name='fatherSituation1']",
    type: "option",
    field: "fatherSituation",
    callback: ($node) => {
      showFamilyInput($node.get(0));
    },
  },
  {
    selector: "input[name='fatherName1']",
    type: "string",
    field: "fatherName",
  },
  {
    selector: "select[name='motherSituation1']",
    type: "option",
    field: "motherSituation",
    callback: ($node) => {
      showFamilyInput($node.get(0));
    },
  },
  {
    selector: "input[name='motherName1']",
    type: "string",
    field: "motherName",
  },
  {
    selector: "select[name='spouseSituation1']",
    type: "option",
    field: "spouseSituation",
    callback: ($node) => {
      showFamilyInput($node.get(0));
    },
  },
  {
    selector: "input[name='spouseName1']",
    type: "string",
    field: "spouseName",
  },
  {
    selector: "select[name='childSituation1']",
    type: "option",
    field: "childSituation",
    callback: ($node) => {
      showFamilyInput($node.get(0));
    },
  },
  {
    selector: "input[name='childName1']",
    type: "string",
    field: "childName",
  },
];

const DATE_REGEX = /^(\d{4})-(\d{2})-(\d{2})$/;
const HKID_REGEX = /^([A-Z]{1,2}[0-9]{6})\(([A-Z0-9])\)$/;
const ISSUE_DATE_REGEX = /^(?:(\d{2})-)?(\d{2})-(\d{2})$/;

for (let item of formFieldMap) {
  if (!(item.field in applicant)) continue;

  const value = applicant[item.field];
  switch (item.type) {
    case "string":
      $(item.selector).val(value);
      break;
    case "date":
      const match_date = DATE_REGEX.exec(value);
      if (match_date) {
        $(item.selector[0]).val(match_date[1]);
        $(item.selector[1]).val(match_date[2]);
        $(item.selector[2]).val(match_date[3]);
      }
      break;
    case "option":
      $(`${item.selector} option[value='${value}']`).attr(
        "selected",
        "selected"
      );
      break;
    case "hkid":
      const match_hkid = HKID_REGEX.exec(value);
      if (match_hkid) {
        $(item.selector[0]).val(match_hkid[1]);
        $(item.selector[1]).val(match_hkid[2]);
      } else {
        $(item.selector[0]).val(value);
      }
      break;
    case "issue-date":
      const match_issue = ISSUE_DATE_REGEX.exec(value);
      if (!match_issue) continue;

      if (item.selector.length === 2) {
        $(item.selector[0]).val(match_issue[2]);
        $(item.selector[1]).val(match_issue[3]);
      } else if (item.selector.length === 3) {
        $(item.selector[0]).val(match_issue[1]);
        $(item.selector[1]).val(match_issue[2]);
        $(item.selector[2]).val(match_issue[3]);
      }
      break;
    case "boolean":
      $(value ? item.selector[0] : item.selector[1]).attr("checked", "checked");
      break;
    case "relative":
      // do something for relative type
      break;
    default:
    // handle default case
  }

  if (item.callback) {
    const $node = $(item.selector);
    if ($node) item.callback($node);
  }
}
