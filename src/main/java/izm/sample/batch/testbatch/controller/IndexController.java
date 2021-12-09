package izm.sample.batch.testbatch.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import izm.sample.batch.testbatch.config.MemberAppConfig;
import izm.sample.batch.testbatch.resources.MemberEntity;
import izm.sample.batch.testbatch.services.MemberService;

import org.springframework.ui.Model;

@Controller
public class IndexController {
    @Autowired
    private MemberAppConfig config;

    @Autowired
    private MemberService memberService;

    @GetMapping("/")
    public String index(Model model) {
        model.addAttribute("setting", config);
        List<MemberEntity> memberList = this.memberService.getMemberList();
        model.addAttribute("memberList", memberList);
        return "index";
    }

    @GetMapping("/new")
    String create(Model model) {
        model.addAttribute("setting", config);
        MemberEntity entry = new MemberEntity();
        model.addAttribute("entry", entry);
        return "edit";
    }
    
    @GetMapping({"/edit/{user_id}"})
    public String edit(@PathVariable("user_id") String id, Model model) {
        model.addAttribute("setting", config);
        MemberEntity entry = this.memberService.getMemberById(id);
        model.addAttribute("entry", entry);
        return "edit";
    }

    @PostMapping("/save")
    public String save(@ModelAttribute MemberEntity entry, Model model) {
        this.memberService.saveMember(entry);
        return index(model);
    }
}
