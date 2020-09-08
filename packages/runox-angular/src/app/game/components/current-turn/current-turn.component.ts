import { Component, Input, OnInit } from '@angular/core';
import { ITurn } from '@runox-game/game-engine/lib/models/turn.model';

@Component({
  selector: 'rnx-current-turn',
  templateUrl: './current-turn.component.html',
  styleUrls: ['./current-turn.component.css'],
})
export class CurrentTurnComponent implements OnInit {
  @Input() turn: ITurn;

  constructor() {}

  ngOnInit(): void {}

  get avatar(): string {
    return this.turn?.player?.pic !== '' && this.turn?.player?.pic !== undefined
      ? this.turn?.player?.pic
      : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABkAAAAZACAMAAAAW0n6VAAAClFBMVEU3S2A4S2E5TGI6TWI6TWM7TmM8T2Q9T2U+UGU+UWY/UWdAUmdBU2hBVGhCVGlDVWpEVmpEVmtFV2xGWGxHWG1HWW1IWm5JWm9KW29KXHBLXXFMXXFNXnJNX3JOX3NPYHRQYXRQYXVRYnZSY3ZTZHdUZXhVZnlWZnlWZ3pXaHtYaHtZaXxaanxaan1ba35cbH5dbX9dbYBeboBfb4Fgb4FgcIJhcYNicYNjcoRjc4Rkc4VldIZmdYZmdodndohod4hpeIlqeYpreotseotse4xtfI1ufI1vfY5vfo5wf49xf5BygJBygZFzgZJ0gpJ1g5N2g5N2hJR3hZV4hpV5hpZ5h5d6iJd7iJh8iZh8ipl9ipp+i5p/jJt/jJyAjZyBjp2Cj52Cj56DkJ+EkZ+FkaCFkqGGk6GHk6KIlKKIlaOJlaSKlqSLl6WLmKaMmKaNmaeOmqePmqiPm6mQnKmRnKqSnauSnquTn6yUn6yVoK2Voa6Woa6Xoq+Yo7CZpLGapbGbpbKbprOcp7OdqLSeqLWeqbWfqragqrahq7ehrLiirLijrbmkrrmkrrqlr7umsLunsbynsb2osr2ps76qs76rtL+rtcCstcCttsGut8KvuMOwucOxusSxusWyu8WzvMa0vMe0vce1vsi2vsi3v8m3wMq4wcq5wcu6wsy6w8y7w828xM29xc69xc++xs+/x9DAx9HAyNHBydLCytLDytPDy9TEzNTFzNXGzdbHztbHztfIz9fJ0NjK0NnK0dnL0trM09vN09vN1NzO1dzP1d3Q1t7Q197R19/S2ODT2eDT2uHU2uHV2+LW3OPX3eTY3uXZ3uXZ3+ba4Obb4Ofc4ejc4ujd4+ne4+rf5Orf5evg5evh5uzMg2v8AAA8gUlEQVR42u3d558X5bnAYZbdRXAFKbbFSlHEgiVgLERREgvGgsaIJQZNjqhRrFhBY1CToJGgKWAjNoxGNEZiQ1FBLCtlZWFb/pljkpMcC8Lu7G/mmeeZ63p3Xp7sfd/fj7PsTL9/AEAG/fxPAICAACAgAAgIAAICAAICgIAAICAACAgAAgIAAgKAgAAgIAAICAACAgACAoCAACAgAAgIAAICAAICgIAAICAACAgAAgIAAgKAgAAgIAAICAACAgACAoCAACAgAAgIAAICAAICgIAAICAACAgACAgAAgKAgAAgIAAICAAICAACAoCAACAgAAgIAAgIAAICgIAAICAACAgACAgAAgKAgAAgIAAICAAICAACAoCAACAgAAgIAAgIAAICgIAAICAACAgACAgAAgKAgAAgIAAICAAICAACAoCAACAgACAgAAgIAAICgIAAICAAICAACAgAAgKAgAAgIAAgIAAICAACAoCAACAgACAgAAgIAAICgIAAICAAICAACAgAAgKAgAAgIAAgIAAICAACAoCAACAgACAgAAgIAAICgIAAgIAAICAACAgAAgKAgACAgAAgIAAICAACAoCAAICAACAgAAgIAAICgIAAgIAAICAACAgAAgKAgACAgAAgIAAICAACAoCAAICAACAgAAgIAAICgIAAgIAAICAACAgAAgKAgACAgAAgIAAICAACAgACAoCAACAgAAgIAAICAAICgIAAICAACAgAAgIAAgKAgAAgIAAICAACAgACAoCAACAgAAgIAAICAAICgIAAICAACAgAAgIAAgKAgAAgIAAICAACAgACAoCAACAgAAgIAAgIAAICgIAAICAACAgACAgAAgKAgAAgIAAICAAICAACAoCAACAgAAgIAAgIAAICgIAAICAACAgACAgAAgKAgAAgIAAICAAICAACAoCAACAgAAgIAAgIAAICgIAAICAACAgACAgAAgKAgAAgIAAgIAAICAACAoCAACAgACAgAAgIAAICgIAAICAAICAACAgAAgKAgAAgIAAgIAAICAACAoCAACAgACAgAAgIAAICgIAAICAAICCwfRvef/XZxQvunHPlZTPOOG3ycYcfMnaffZp3/ly//2j4/P8Yvs8+ow6ZcNzk086acfnsm+cvWvrSO+u6/Y+HgEDFtPz9yYXzrr7w5GMO3mfnun7ZDdn74GOnXXLd/MUvrG73vyoCAslqe+PJBTdcdNKE5sZ+Odhl3JTzr1/w9EolQUAgGR3vPHHXT06dsEu/QvRvnjR99oMvbfS/OwICUZdj3iUnjGroF8KuR51/6+K3OvwUEBCIyuZXFl51yugw5fiShjGnzf7dW51+IggIlN+7f7z+tDH1/Upl0GEzfvH8Jj8bBARKqvO1B37y7SH9yqph3Dl3vrDFjwkBgXJ557eXTWrqV34NEy554B0/LgQESqH1mRumDu8Xk12/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/z7mAaAX9lnQKSCfv3L34bFmAaCXxizqqnxAHj/EHABkMG5xd6UDsmyiGQDIKPBHC4MG5KXj/fwB+mDSsmoG5PVTvDMRoI8mL69eQFad3d8PHqDvpq6oVkA+uMA7EwFqo/+0N6sTkJafeGciQO3UB/niVICAbLjGOxMBaivEF6cKD8imm4f5SQPU3A4zP0k7IO137uanDJCLplnr0g1Ix6/38hMGyM3g2a1pBqT7oTF+ugC5Gn7zpgQD8sh4P1mA3O1a2OdCigrIM9/yUwUoxMh7OhIKyPLJfqIAhdn3/q5EAvL373rpFUChxj7cnUBA3jnLS68ACnfQktgDsmZGgx8jQAhHPBlzQFpmeukVQDBH/znWgKy/2kuvAII64eUYA/LZnJ396AACqzv577EFpH3ern5uACXQ/4yVMQWk45cj/cwASqLhvPdjCUjXolF+XgAl0njx2igCsuRAPyuAkhn405bSB+S5iX5OACXU9LP1pQ7IihP9jABKasiNraUNyKozvbUEoMSG395WyoB8dHGjHw5Aue1+d3vpArL+Kn92DhCBvX7VUaqAtN06zA8FIA6jFnaVJiAd9zb7gQDEY9wfu0sRkO6HRvthAMTl0MdLEJClh/pBAMRn4rOhA3KsHwJAnI4LHBA/AYBYCQgAAgKAgAAgIAICICACAoCAACAgAAgIAAIiIAACIiAACAgAAgKAgAAgIAICICACAoCAACAgAAgIAAIiIAACIiAACAgAAgKAgAgIgIAICICACAgAAgKAgAAgIAICICACAiAgAgKAgAAgIAAIiIAACIiAAAiIgAAgIAAICAACIiAAAiIgAAgIAAICgIAAICACAiAgAgKAgAAgIAAICAACIiAAAiIgAAgIAAICgIAAICACAiAgAgKAgAAgIAAICAACIiAAAiIgAAgIAAICgIAICICACAiAgAgIAAICgIAAICACAiAgAgIgIAICgIAAICAACIiAAAiIgAAIiIAAICAACAgAAiIgAAIiIAAICAACAoCAACAgAgIgIAICgIAAICAACAgAAiIgAAIiIAAICAACAoCAACAgAgIgIAICgIAAICAACIiAAAiIgAAIiIAAICAACAgAAiIgAAIiIAACIiAACAgAAgKAgAgIgIAICICACAgAAgKAgAAgIAICICACAoCAACAgAAgIAAIiIAACIiAACAgAIQPyv3Z8so4WIecCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAABJRU5ErkJggg==';
  }
}
