var _0x40d9f1 = _0x323e;
(
  function (_0x3b580e, _0x36e278) {
    var _0x43c384 = _0x323e,
    _0x3cd8df = _0x3b580e();
    while (!![]) {
      try {
        var _0x4a9c2e = parseInt(_0x43c384(470)) / 1 + - parseInt(_0x43c384(472)) / 2 + - parseInt(_0x43c384(481)) / 3 + parseInt(_0x43c384(457)) / 4 * ( - parseInt(_0x43c384(490)) / 5) + parseInt(_0x43c384(453)) / 6 * (parseInt(_0x43c384(445)) / 7) + - parseInt(_0x43c384(489)) / 8 * (parseInt(_0x43c384(456)) / 9) + parseInt(_0x43c384(480)) / 10;
        if (_0x4a9c2e === _0x36e278) break;
         else _0x3cd8df['push'](_0x3cd8df['shift']());
      } catch (_0x29b9a3) {
        _0x3cd8df['push'](_0x3cd8df['shift']());
      }
    }
  }(_0xe9b2, 269880)
);
var sDict = [
  _0x40d9f1(442),
  '3Sfj',
  'dsg1222',
  _0x40d9f1(461),
  _0x40d9f1(479),
  'pij4',
  _0x40d9f1(468),
  _0x40d9f1(483),
  _0x40d9f1(465),
  _0x40d9f1(473),
  'k0eera',
  _0x40d9f1(475),
  _0x40d9f1(493)
],
sDictW = '',
skill = [],
lastSkill = 0,
maxSkill = 0,
skillLevel1 = 0.63,
skillLevel2 = 0.865,
skillLevel3 = 0.95,
skillLevel4 = 0.9815,
timeIntensities = [
  [3,
  0.1],
  [
    6,
    0.14
  ],
  [
    10,
    0.17
  ],
  [
    15,
    0.21
  ],
  [
    21,
    0.25
  ],
  [
    30,
    0.35
  ],
  [
    40,
    0.4
  ],
  [
    60,
    0.5
  ],
  [
    1000000,
    0.6
  ]
],
responseMasteryTimer,
responseMasteryTime,
masteryTimeFrequency = 50,
masteryAttempts = 0,
masterySuccessAttempts = 0,
bufferedAttempts = 0,
processLog = ![],
processWheelspinningLog = ![],
hasAlreadyMastered3 = ![],
hasAlreadyMastered4 = ![],
barSpeed = 200,
inRowWrong = 0,
status = '';
function setSkill(_0x44af0f) {
  var _0x18cdba = _0x40d9f1;
  for (i = 0; i < sDict[_0x18cdba(458)]; ++i) {
    skill[sDict[i]] = skill[_0x44af0f];
  }
}
function initSkill() {
  var _0x478016 = _0x40d9f1;
  sDictW = sDict[Math[_0x478016(467)](Math['random']() * sDict[_0x478016(458)])],
  skill[sDictW] = 0,
  setSkill(sDictW),
  lastSkill = 0,
  maxSkill = 0,
  masteryAttempts = 0,
  masterySuccessAttempts = 0,
  bufferedAttempts = 0,
  inRowWrong = 0,
  startResponseMasteryTimer(),
  initBar();
}
function initBar() {
  var _0x41d42f = _0x40d9f1;
  $[_0x41d42f(454)]({
    'cache': ![]
  });
  var _0x12ea3d = 150;
  $(_0x41d42f(452)) [_0x41d42f(487)]('border-right-width', _0x41d42f(466)),
  updateBar('', skill[sDictW]);
}
function fjWEDGjivdsXprocessSkillUpdate(_0x7a9259, _0x399e5b) {
  var _0x12f325 = _0x40d9f1;
  if (exercise == 26) {
    var _0x3a85bb = _0x12f325(446);
    _0x7a9259[_0x12f325(462)](_0x3a85bb) ? _0x7a9259 = _0x7a9259[_0x12f325(492)](_0x3a85bb['length']) : _0x7a9259 = _0x12f325(496);
  }
  sDictW = sDict[Math[_0x12f325(467)](Math[_0x12f325(451)]() * sDict[_0x12f325(458)])],
  lastSkill = skill[sDictW],
  updateSkill(lastSkill, _0x7a9259, _0x399e5b),
  bufferedSkillLog(skill[sDictW], lastSkill),
  updateBar(skill[sDictW]),
  checkFinalBoard(exercise, mode, skill[sDictW], lastSkill),
  setSkill(sDictW);
}
function _0xe9b2() {
  var _0x5392a8 = [
    '906294xFNENb',
    'xjn3',
    'level4',
    'mxzn',
    'fadeOut',
    'border-right-width',
    'wheelspinning log: ',
    'odjg39',
    '13487360BAcPcd',
    '1426206jfnVOl',
    '1px',
    'vjn35',
    'min',
    'level1',
    'removeClass',
    'css',
    '#skillLabel',
    '3301448VxjVJQ',
    '2915TotoLw',
    '#circle',
    'substring',
    'odfg',
    'nearMiss',
    'partialCorrect',
    'invalid',
    'Zg3951',
    'addClass',
    'level0',
    '1268526GBNFzM',
    'xkf34lk#',
    'level3',
    'easeOutCirc',
    'fadeIn',
    'animate',
    'random',
    '#bar',
    '12xkZcIt',
    'ajaxSetup',
    'width',
    '9grYhKG',
    '2316RpzNnS',
    'length',
    '#myMaxBar',
    'wrongNormal',
    'dsgOEs',
    'startsWith',
    '#skillBar',
    'log',
    'ovdjn345',
    '0px',
    'floor',
    'djn3',
    'level2',
    '237495vzLZAe',
    'html'
  ];
  _0xe9b2 = function () {
    return _0x5392a8;
  };
  return _0xe9b2();
}
function getTimeIntensity(_0xd5a5e8) {
  var _0x4855ef = _0x40d9f1;
  for (i = 0; i < timeIntensities[_0x4855ef(458)]; ++i) {
    if (_0xd5a5e8 < timeIntensities[i][0]) return timeIntensities[i][1];
  }
}
function updateSkill(_0x235169, _0x43ccb0, _0x51cb53) {
  var _0x233529 = _0x40d9f1;
  masteryAttempts++;
  _0x43ccb0 == 'correct' &&
  (
    correct = 1,
    persuasiveness = persCorrect,
    masterySuccessAttempts++
  );
  _0x43ccb0 == _0x233529(495) &&
  (correct = 0, persuasiveness = persNearMiss);
  _0x43ccb0 == _0x233529(494) &&
  (persuasiveness = persNearMiss, correct = 0);
  _0x43ccb0 == _0x233529(460) &&
  (persuasiveness = persWrongNormal, correct = 0);
  _0x43ccb0 == 'wrongGuess' &&
  (persuasiveness = persWrongGuess, correct = 0);
  _0x43ccb0 == _0x233529(496) &&
  (correct = 0);
  var _0x475593 = correct,
  _0x516f5b = getTimeIntensity(_0x51cb53 / 1000),
  _0x23543f = persuasiveness,
  _0x22154a = _0x516f5b * _0x23543f;
  skill[sDictW] = (1 - _0x22154a) * skill[sDictW] + _0x22154a * _0x475593,
  skill[sDictW] > maxSkill &&
  (maxSkill = skill[sDictW]),
  correct == 1 ? inRowWrong = 0 : inRowWrong++,
  inRowWrong >= 3 &&
  notifyInRowWrong();
}
function bufferedSkillLog(_0xa61289, _0x44d92d) {
  var _0x3746a7 = _0x40d9f1;
  bufferedAttempts++,
  _0x44d92d == 0 &&
  (processLog = !![]),
  _0x44d92d < skillLevel1 &&
  _0xa61289 >= skillLevel1 &&
  (processLog = !![]),
  _0x44d92d < skillLevel2 &&
  _0xa61289 >= skillLevel2 &&
  (processLog = !![]),
  _0x44d92d < skillLevel3 &&
  _0xa61289 >= skillLevel3 &&
  (processLog = !![]),
  _0x44d92d < skillLevel4 &&
  _0xa61289 >= skillLevel4 &&
  (processLog = !![]),
  responseMasteryTime > 2 * medianTimeToSolve &&
  !processWheelspinningLog &&
  (
    processWheelspinningLog = !![],
    processLog = !![],
    console['log'](_0x3746a7(478) + 2 * medianTimeToSolve)
  ),
  processLog &&
  logSkill(
    getBadgeNumber(_0xa61289),
    responseMasteryTime,
    masteryAttempts,
    masterySuccessAttempts,
    bufferedAttempts
  ) ['then'](() => {
    bufferedAttempts = 0,
    processLog = ![];
  });
}
function updateBar(_0x343097) {
  var _0x3bcd70 = _0x40d9f1,
  _0x174823 = $(_0x3bcd70(463)) [_0x3bcd70(455)](),
  _0x16f2eb = skillLevel4,
  _0x4bd05f = 1 - _0x16f2eb,
  _0x13af5b = (1 - _0x16f2eb) / (1 - _0x343097),
  _0x1c82a6 = 1 - getBaseLog(_0x4bd05f, _0x13af5b);
  _0x1c82a6 = Math[_0x3bcd70(484)](1, _0x1c82a6),
  _0x343097 > 0 ? (
    barSpeed = 300,
    $('#bar') [_0x3bcd70(450)]({
      'width': _0x174823 * _0x1c82a6
    }, {
      'duration': barSpeed,
      'easing': _0x3bcd70(448),
      'complete': function () {
        var _0x2cf9a6 = _0x3bcd70;
        if (_0x343097 >= maxSkill) {
          var _0xe30c78 = (1 - _0x16f2eb) / (1 - maxSkill),
          _0x2e64ea = 1 - getBaseLog(_0x4bd05f, _0xe30c78);
          $(_0x2cf9a6(459)) [_0x2cf9a6(487)]({
            'width': _0x174823 * _0x2e64ea
          });
        }
      }
    }),
    $(_0x3bcd70(452)) ['css'](_0x3bcd70(477), _0x3bcd70(482))
  ) : (
    $(_0x3bcd70(452)) [_0x3bcd70(487)]({
      'width': 0
    }),
    $(_0x3bcd70(452)) [_0x3bcd70(487)]('border-right-width', '0px'),
    $(_0x3bcd70(452)) [_0x3bcd70(486)](_0x3bcd70(485)) [_0x3bcd70(486)](_0x3bcd70(469)) [_0x3bcd70(486)](_0x3bcd70(447)) [_0x3bcd70(486)](_0x3bcd70(474)),
    $(_0x3bcd70(452)) [_0x3bcd70(443)](_0x3bcd70(444)),
    $(_0x3bcd70(459)) [_0x3bcd70(486)](_0x3bcd70(485)) [_0x3bcd70(486)](_0x3bcd70(469)) ['removeClass'](_0x3bcd70(447)) [_0x3bcd70(486)](_0x3bcd70(474)),
    $(_0x3bcd70(459)) ['addClass']('level0'),
    $(_0x3bcd70(459)) [_0x3bcd70(487)]({
      'width': 0
    }),
    $(_0x3bcd70(491)) [_0x3bcd70(486)](_0x3bcd70(485)) ['removeClass'](_0x3bcd70(469)) [_0x3bcd70(486)](_0x3bcd70(447)) [_0x3bcd70(486)](_0x3bcd70(474)),
    $(_0x3bcd70(491)) ['addClass'](_0x3bcd70(444)),
    $(_0x3bcd70(491)) [_0x3bcd70(449)]()
  ),
  _0x343097 >= 0 &&
  _0x343097 < skillLevel1 &&
  $(_0x3bcd70(488)) [_0x3bcd70(471)](progress_mira_zvladnuti_0),
  _0x343097 >= skillLevel1 &&
  _0x343097 < skillLevel2 &&
  $('#skillLabel') ['html'](progress_mira_zvladnuti_1),
  _0x343097 >= skillLevel2 &&
  _0x343097 < skillLevel3 &&
  $(_0x3bcd70(488)) [_0x3bcd70(471)](progress_mira_zvladnuti_2),
  _0x343097 >= skillLevel3 &&
  _0x343097 < skillLevel4 &&
  $(_0x3bcd70(488)) [_0x3bcd70(471)](progress_mira_zvladnuti_3),
  _0x343097 >= skillLevel4 &&
  $(_0x3bcd70(488)) [_0x3bcd70(471)](progress_mira_zvladnuti_4),
  lastSkill < skillLevel1 &&
  _0x343097 >= skillLevel1 &&
  (
    $('#bar') [_0x3bcd70(486)](_0x3bcd70(444)) [_0x3bcd70(443)](_0x3bcd70(485)),
    $(_0x3bcd70(491)) ['fadeOut'](
      300,
      function () {
        var _0x58d5b4 = _0x3bcd70;
        $(_0x58d5b4(491)) ['removeClass'](_0x58d5b4(444)) [_0x58d5b4(443)]('level1'),
        $('#circle') ['fadeIn']();
      }
    ),
    _0x343097 >= maxSkill &&
    $('#myMaxBar') [_0x3bcd70(486)](_0x3bcd70(444)) [_0x3bcd70(443)](_0x3bcd70(485))
  ),
  lastSkill < skillLevel2 &&
  _0x343097 >= skillLevel2 &&
  (
    $(_0x3bcd70(452)) [_0x3bcd70(486)](_0x3bcd70(485)) ['addClass'](_0x3bcd70(469)),
    $(_0x3bcd70(491)) [_0x3bcd70(476)](
      300,
      function () {
        var _0x3d1c97 = _0x3bcd70;
        $('#circle') [_0x3d1c97(486)](_0x3d1c97(485)) [_0x3d1c97(443)](_0x3d1c97(469)),
        $('#circle') [_0x3d1c97(449)]();
      }
    ),
    _0x343097 >= maxSkill &&
    $(_0x3bcd70(459)) [_0x3bcd70(486)]('level1') [_0x3bcd70(443)]('level2')
  ),
  lastSkill < skillLevel3 &&
  _0x343097 >= skillLevel3 &&
  (
    $('#bar') [_0x3bcd70(486)](_0x3bcd70(469)) [_0x3bcd70(443)](_0x3bcd70(447)),
    $(_0x3bcd70(491)) [_0x3bcd70(476)](
      300,
      function () {
        var _0x4f7ab8 = _0x3bcd70;
        $(_0x4f7ab8(491)) [_0x4f7ab8(486)](_0x4f7ab8(469)) ['addClass'](_0x4f7ab8(447) + candidate),
        $(_0x4f7ab8(491)) [_0x4f7ab8(449)]();
      }
    ),
    _0x343097 >= maxSkill &&
    $('#myMaxBar') [_0x3bcd70(486)](_0x3bcd70(469)) [_0x3bcd70(443)](_0x3bcd70(447))
  ),
  lastSkill < skillLevel4 &&
  _0x343097 >= skillLevel4 &&
  (
    $(_0x3bcd70(452)) ['removeClass'](_0x3bcd70(447)) [_0x3bcd70(443)](_0x3bcd70(474)),
    $(_0x3bcd70(491)) [_0x3bcd70(476)](
      300,
      function () {
        var _0xb3170b = _0x3bcd70;
        $(_0xb3170b(491)) ['removeClass']('level3') [_0xb3170b(443)](_0xb3170b(474) + candidate),
        $('#circle') [_0xb3170b(449)]();
      }
    ),
    _0x343097 >= maxSkill &&
    $(_0x3bcd70(459)) [_0x3bcd70(486)](_0x3bcd70(447)) [_0x3bcd70(443)]('level4')
  );
}
function getBaseLog(_0x365d5e, _0x176c81) {
  var _0x5d1fbd = _0x40d9f1;
  return Math[_0x5d1fbd(464)](_0x176c81) / Math[_0x5d1fbd(464)](_0x365d5e);
}
function startResponseMasteryTimer() {
  clearInterval(responseMasteryTimer),
  responseMasteryTime = 0,
  responseMasteryTimer = setInterval(
    function () {
      responseMasteryTime += masteryTimeFrequency;
    },
    masteryTimeFrequency
  );
}
function stopResponseMasteryTimer() {
  clearInterval(responseMasteryTimer);
}
function getBadgeNumber(_0x1f6e12) {
  if (_0x1f6e12 >= 0 && _0x1f6e12 < skillLevel1) return 0;
  if (_0x1f6e12 >= skillLevel1 && _0x1f6e12 < skillLevel2) return 1;
  if (_0x1f6e12 >= skillLevel2 && _0x1f6e12 < skillLevel3) return 2;
  if (_0x1f6e12 >= skillLevel3 && _0x1f6e12 < skillLevel4) return 3;
  if (_0x1f6e12 >= skillLevel4) return 4;
}
function _0x323e(_0x5942b5, _0x57d388) {
  var _0xe9b2d = _0xe9b2();
  return _0x323e = function (_0x323e6d, _0x4d4537) {
    _0x323e6d = _0x323e6d - 442;
    var _0x110abb = _0xe9b2d[_0x323e6d];
    return _0x110abb;
  },
  _0x323e(_0x5942b5, _0x57d388);
}
function getCurrentBadgeNumber() {
  return getBadgeNumber(skill[sDictW]);
}


function simulateProgressiveSolving() {
    var arr = [3000, 2000, 1500, 1000, 4000]; // Your array of numbers
    var randomNumber = arr[Math.floor(Math.random() * arr.length)];
    console.log(`Running at ${randomNumber}ms`)
    // Reset initial state
    initSkill();
    
    // Define optimal solving times (in milliseconds)
    const optimalTimes = [
        3000,  // 3 seconds - fastest time bracket
        4000,  // 4 seconds - still in fast bracket
        5000   // 5 seconds - consistent good performance
    ];
    
    // Function to simulate one correct answer
    function simulateCorrectAnswer(time) {
        // Set the response time
        responseMasteryTime = time;
        
        // Simulate a correct answer
        fjWEDGjivdsXprocessSkillUpdate('correct', time);
        
        // Log current skill level
        console.log(`Current skill: ${skill[sDictW].toFixed(4)} (solved in ${time/1000}s)`);
    }
    
    // Simulate series of correct answers
    function runSimulation() {
        let currentSolve = 0;
        
        const interval = setInterval(() => {
            if (skill[sDictW] >= 0.9815) { // skillLevel4
                clearInterval(interval);
                console.log('Reached maximum skill level!');
                return;
            }
            
            // Get time for this solve
            const time = optimalTimes[currentSolve % optimalTimes.length];
            
            // Simulate solve
            simulateCorrectAnswer(time);
            
            currentSolve++;
        }, randomNumber); // Run every second
    }
    
    // Start simulation
    runSimulation();
}

// Usage:
simulateProgressiveSolving();

